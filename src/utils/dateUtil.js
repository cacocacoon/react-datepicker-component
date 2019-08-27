export function getDateOfTheWeek(date = [1233, 8, 5]) {
	// Gaussian algorithm
	const [year, month, day] = date
	const Y = isJanOrFeb(month) ? year - 1 : year
	const d = day
	const m = ((month + 9) % 12) + 1
	const y = Y % 100
	const c = Math.floor(Y / 100)
	const w =
		(d +
			Math.floor(2.6 * m - 0.2) +
			y +
			Math.floor(y / 4) +
			Math.floor(c / 4) -
			2 * c) %
		7
	if (w < 0) {
		return w + 7
	}

	return w
}

function isJanOrFeb(month) {
	return month === 1 || month === 2
}

export function getFirstDateOfTheMonth(theYear, theMonth) {
	return [theYear, theMonth, 1]
}

export function getMonthlyCalendarData(selectedDate) {
	const [theYear, theMonth] = selectedDate
	// cache
	if(getMonthlyCalendarData[`${theYear}-${theMonth}`]) {
		return getMonthlyCalendarData[`${theYear}-${theMonth}`]
	}

	const firstDateOfTheMonth = getFirstDateOfTheMonth(theYear, theMonth)
	const lastDateOfTheMonth = getLastDateOfTheMonth(theYear, theMonth)
	const firstDay = getDateOfTheWeek(firstDateOfTheMonth)
	const monthlyCalendarData = fillMonthData(firstDay, firstDateOfTheMonth, lastDateOfTheMonth)

	// set cache
	getMonthlyCalendarData[`${theYear}-${theMonth}`] = monthlyCalendarData
	return monthlyCalendarData
}

function padStartDates(monthlyCalendarData, firstDay, firstDateOfTheMonth) {
	let date = firstDateOfTheMonth
	let day = firstDay
	while (day > 0) {
		date = yesterday(date)
		--day
		monthlyCalendarData[0][day] = date
	}
}

function padEndDates(monthlyCalendarData, nextDay, week, lastDateOfTheMonth) {
	let date = lastDateOfTheMonth
	++nextDay
	if (nextDay === 7) {
		nextDay = 0
		++week
	}
	do {
		date = tomorrow(date)
		monthlyCalendarData[week][nextDay] = date
		++nextDay
		if (nextDay === 7) {
			nextDay = 0
			++week
		}
	} while (week < 6)
}

// fill month data
function fillMonthData(firstDay, firstDateOfTheMonth, lastDateOfTheMonth) {
	const monthlyCalendarData = new Array(6).fill(0).map(() => new Array(7))
	let nextDay = firstDay
	let nextDate = firstDateOfTheMonth
	let week = 0
	padStartDates(monthlyCalendarData, firstDay, firstDateOfTheMonth)
	while (!isSameDate(nextDate, lastDateOfTheMonth)) {
		monthlyCalendarData[week][nextDay] = nextDate
		nextDate = tomorrow(nextDate)
		++nextDay
		if (nextDay === 7) {
			nextDay = 0
			++week
		}
	}
	monthlyCalendarData[week][nextDay] = nextDate
	padEndDates(monthlyCalendarData, nextDay, week, lastDateOfTheMonth)

	return monthlyCalendarData
}

function isSameDate(aDate, bDate) {
	return aDate[0] === bDate[0] && aDate[1] === bDate[1] && aDate[2] === bDate[2]
}

function tomorrow(date) {
	const nextDate = new Date(date[0], date[1] - 1, date[2])
	nextDate.setDate(nextDate.getDate() + 1)

	return [nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate()]
}

function yesterday(date) {
	const prevDate = new Date(date[0], date[1] - 1, date[2])
	prevDate.setDate(prevDate.getDate() - 1)
	return [prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDate()]
}

export function oneMonthAgo(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setMonth(d.getMonth() - 1)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

export function oneYearAgo(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setFullYear(d.getFullYear() - 1)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

export function tenYearAgo(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setFullYear(d.getFullYear() - 10)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

export function oneMonthLater(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setMonth(d.getMonth() + 1)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

export function oneYearLater(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setFullYear(d.getFullYear() + 1)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

export function tenYearLater(date) {
	const d = new Date(date[0], date[1] - 1, date[2])
	d.setFullYear(d.getFullYear() + 10)
	return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
}

function getLastDateOfTheMonth(theYear, theMonth) {
	const lastDay = new Date(theYear, theMonth, 0).getDate()

	return [theYear, theMonth, lastDay]
}

export const WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export const MONTH = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']