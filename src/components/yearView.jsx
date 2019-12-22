import React from 'react'
import { MONTH } from '../utils/dateUtil'

const monthViewCells = [MONTH.slice(1, 5), MONTH.slice(5, 9), MONTH.slice(9, 14)]

export default function YearView({ showDate, selectedDate, today }) {
	return monthViewCells.map((row, i) => (
		<div key={i} className="row type2">
			{row.map((cell, j) => {
				let className = 'cell'
				const month = i * 4 + j + 1
				// selected month
				if (month === selectedDate[1] && showDate[0] === selectedDate[0]) {
					className += ' red-circle'
				}

				// current month
				if (showDate[0] === today[0] && month === today[1]) {
					className += ' red'
				}

				return <div key={cell} className={className} data-date={[showDate[0], month, 1].join('-')}>{cell}</div>
			})}
		</div>
	))
}