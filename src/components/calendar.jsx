import React from 'react'
import '../scss/calendar.scss'
import { getMonthlyCalendarData } from '../utils/dateUtil'

export default function Calendar(props) {
    const calendarData = getMonthlyCalendarData(props.selectedDate)
    return (
        <div></div>
    )
}