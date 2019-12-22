import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'

import DecadeView from '../decadeView'
import { getMonthlyCalendarData } from '../../utils/dateUtil'

describe('decadeView', () => {
	const date = new Date(2019, 10, 10)
	const day = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
	const calendarData = getMonthlyCalendarData(day)

	test('decadeView', async () => {
		let testDecadeView
		await act(async () => {
			testDecadeView = TestRenderer.create(
				<DecadeView calendarData={calendarData} showDate={day} selectedDate={day} today={day} />
			)
		})

		expect(testDecadeView.toJSON()).toMatchSnapshot()
	})
})