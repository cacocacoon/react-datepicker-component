import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'

import YearView from '../yearView'
import { getMonthlyCalendarData } from '../../utils/dateUtil'

describe('yearView', () => {
	const date = new Date(2019, 10, 10)
	const day = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
	const calendarData = getMonthlyCalendarData(day)

	test('yearView', async () => {
		let testYearView
		await act(async () => (
			testYearView = TestRenderer.create(
				<YearView calendarData={calendarData} showDate={day} selectedDate={day} today={day} />
			)
		))
		expect(testYearView.toJSON()).toMatchSnapshot()
	})
})
