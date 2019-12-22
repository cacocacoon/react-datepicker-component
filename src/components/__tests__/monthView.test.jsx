import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'

import MonthView from '../monthView'
import { getMonthlyCalendarData } from '../../utils/dateUtil'

describe('monthView', () => {
	const date = new Date(2019, 10, 10)
	const day = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
	const calendarData = getMonthlyCalendarData(day)

	test('monthView', async () => {
		let testMonthView
		await act(async () => (
			testMonthView = TestRenderer.create(
				<MonthView calendarData={calendarData} showDate={day} selectedDate={day} today={day} />
			)
		))

		expect(testMonthView.toJSON()).toMatchSnapshot()
	})
})