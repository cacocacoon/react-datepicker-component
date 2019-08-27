import React from 'react'
import { WEEK } from '../utils/dateUtil'

export default function MonthView({ calendarData, selectedDate, today, showDate }) {
    return (
        <>
            <div className="row">
                {WEEK.map(d => (
                    <div key={d} className="cell week">{d}</div>
                ))}
            </div>
            {calendarData.map((row, i) => (
                <div key={i} className="row">
                    {row.map(cell => (() => {
                        let className = 'cell'
                        const year = cell[0]
                        const month = cell[1]
                        const date = cell[2]
                        if (month !== showDate[1]) {
                            className += ' gray'
                        }

                        if (year === selectedDate[0] && month === selectedDate[1] && date === selectedDate[2]) {
                            className += ' red-circle'
                        }
                        
                        // current date
                        if (year === today[0] && month === today[1] && date === today[2]) {
                            className += ' red'
                        }

                        return <div key={cell[2]} className={className} data-date={cell.join('-')}>{cell[2]}</div>
                    }
                    )())}
                </div>
            ))}
        </>
    )
}