import React, { useState, useCallback } from 'react'
import Calendar from './calendar'
import useOutsideOfDOMClick from '../hooks/useOutsideOfDOMClick'

export default function DatePicker({ date = null, onSelect = () => {} }) {
    const [selectedDate, setSelectedDate] = useState(date ? date.split('-').map(Number) : [])
    const [showCalendar, setShowCalendar] = useState(false)

    function clickInput() {
        setShowCalendar(!showCalendar)
    }

    function datePick(date) {
        setSelectedDate(date.split('-').map(Number))
        onSelect(date)
        setShowCalendar(!showCalendar)
    }

    const datePickerRef = useOutsideOfDOMClick(useCallback(() => {
        setShowCalendar(false)
    }, []))

    return (
        <div className="datepicker" ref={datePickerRef}>
            <input value={selectedDate.join('-')} onClick={clickInput} readOnly/>
            {showCalendar && <Calendar selectedDate={selectedDate} onPick={datePick} />}
        </div>
    )
}