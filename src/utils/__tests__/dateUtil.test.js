import {
	getFirstDateOfTheMonth,
	oneMonthAgo,
	oneYearAgo,
	tenYearAgo,
	oneMonthLater,
	oneYearLater,
	tenYearLater
} from '../dateUtil'

describe('dateUtil', () => {
	test('getFirstDateOfTheMonth', () => {
		expect(getFirstDateOfTheMonth(2019, 12, 15)).toEqual([2019, 12, 1])
	})

	test('oneMonthAgo', () => {
		expect(oneMonthAgo([2019, 3, 11])).toEqual([2019, 2, 11])
	})

	test('oneYearAgo', () => {
		expect(oneYearAgo([2019, 3, 11])).toEqual([2018, 3, 11])
	})

	test('tenYearAgo', () => {
		expect(tenYearAgo([2019, 3, 11])).toEqual([2009, 3, 11])
	})

	test('oneMonthLater', () => {
		expect(oneMonthLater([2019, 3, 11])).toEqual([2019, 4, 11])
	})

	test('oneYearLater', () => {
		expect(oneYearLater([2019, 3, 11])).toEqual([2020, 3, 11])
	})

	test('tenYearLater', () => {
		expect(tenYearLater([2019, 3, 11])).toEqual([2029, 3, 11])
	})
})