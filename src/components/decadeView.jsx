import React from 'react'

function range(size, startAt) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export default function DecadeView({ showDate, selectedDate, today }) {
    const selectedYear = showDate[0]
    const startYear = Math.floor(selectedYear / 10) * 10 - 1
    const decadeViewRange = range(12, startYear)
    const decadeViewCells = [decadeViewRange.slice(0, 4), decadeViewRange.slice(4, 8), decadeViewRange.slice(8, 13)]
    return (
        <>
            {decadeViewCells.map((row, i) => (
                <div key={i} className="row type2">
                    {row.map((cell, j) => {
                        let className = 'cell'
                        if ((i === 0 && j === 0) || (i === 2 && j === 3)) {
                            className += ' gray'
                        }

                        if (cell === selectedDate[0]) {
                            className += ' red-circle'
                        }

                        // current year
                        if (cell === today[0]) {
                            className += ' red'
                        }

                        return <div key={cell} className={className} data-date={[cell, showDate[1], 1].join('-')}>{cell}</div>
                    })}
                </div>
            ))}
        </>
    )
}