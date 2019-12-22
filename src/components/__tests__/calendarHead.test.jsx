import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'

import CalendarHead from '../calendarHead'

describe('yearView', () => {
	test('calendarHead', async () => {
		let testYearView
		await act(async () => (
			testYearView = TestRenderer.create(
				<CalendarHead />
			)
		))
		expect(testYearView.toJSON()).toMatchSnapshot()
	})
})