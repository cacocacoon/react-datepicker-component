import React, { useState } from 'react'
import CalendarHead from './calendarHead'
import MonthView from './monthView'
import YearView from './yearView'
import DecadeView from './decadeView'
import {
    getMonthlyCalendarData,
    oneMonthAgo,
    oneYearAgo,
    tenYearAgo,
    oneMonthLater,
    oneYearLater,
    tenYearLater,
    MONTH
} from '../utils/dateUtil'
import '../scss/calendar.scss'

const viewType = Object.freeze({
    MONTH: 0,
    YEAR: 1,
    DECADE: 2
})

export default function Calendar({ selectedDate, onPick }) {
    const [today] = useState(() => {
        const now = new Date()
        return [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    })
    
    const [showDate, setShowDate] = useState(selectedDate.length > 0 ? selectedDate : today)
    const [showViewType, setShowViewType] = useState(viewType.MONTH)
    const calendarData = getMonthlyCalendarData(showDate)

    function clickHeadButton() {
        const nextType = showViewType + 1
        if (nextType === 3) {
            return
        }

        setShowViewType(nextType)
    }

    function back() {
        switch (showViewType) {
            case viewType.DECADE:
                setShowDate(tenYearAgo(showDate))
                break;
            case viewType.YEAR:
                setShowDate(oneYearAgo(showDate))
                break;
            case viewType.MONTH:
                setShowDate(oneMonthAgo(showDate))
                break;
            default:
                break;
        }
    }

    function forward() {
        switch (showViewType) {
            case viewType.DECADE:
                setShowDate(tenYearLater(showDate))
                break;
            case viewType.YEAR:
                setShowDate(oneYearLater(showDate))
                break;
            case viewType.MONTH:
                setShowDate(oneMonthLater(showDate))
                break;
            default:
                break;
        }
    }

    function select(e) {
        const date = e.target.dataset.date
        if(!date) {
            return
        }

        if (showViewType !== viewType.MONTH) {
            setShowDate(date.split('-').map(Number))
            setShowViewType(showViewType - 1)
            return
        }

        onPick(date)
    }

    const headText = (() => {
        switch (showViewType) {
            case viewType.DECADE:
                const startYear = Math.floor(showDate[0] / 10) * 10
                return `${startYear} - ${startYear + 9}`
            case viewType.YEAR:
                return showDate[0]
            case viewType.MONTH:
                return `${MONTH[showDate[1]]} ${showDate[0]}`
            default:
                break;
        }
    })()

    return (
        <div className="calendar" onClick={select}>
            <CalendarHead back={back} clickHeadButton={clickHeadButton} forward={forward} text={headText} />
            {showViewType === viewType.MONTH && <MonthView calendarData={calendarData} selectedDate={selectedDate} today={today} showDate={showDate} />}
            {showViewType === viewType.YEAR && <YearView calendarData={calendarData} selectedDate={selectedDate} today={today} showDate={showDate} />}
            {showViewType === viewType.DECADE && <DecadeView calendarData={calendarData} selectedDate={selectedDate} today={today} showDate={showDate} />}
        </div>
    )
}