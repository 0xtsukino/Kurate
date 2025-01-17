import { browser } from '$app/environment'

export function formatAddress(address: string, digits = 4) {
	return `${address.substring(0, digits + 2)}…${address.substring(address.length - digits - 1)}`
}

export function formatDateFromNow(timestamp: number) {
	const delta = Math.round((Date.now() - timestamp) / 1000)

	const minute = 60
	const hour = minute * 60
	const day = hour * 24
	const week = day * 7
	const month = day * 30
	const year = day * 365

	if (delta < minute) return `${Math.round(delta)}s`
	else if (delta < hour) return `${Math.round(delta / minute)}m`
	else if (delta < day) return `${Math.round(delta / hour)}h`
	else if (delta < week) return `${Math.round(delta / day)}d`
	else if (delta < month) return `${Math.round(delta / week)}w`
	else if (delta < year) return `${Math.round(delta / month)}m`
	return `${Math.round(delta / year)}y`
}

export function formatDateAndTime(timestamp: number) {
	if (!browser) {
		return ''
	}
	const locale = navigator.language
	const date = new Date(timestamp)

	const dateFormat = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})
	let dateString = dateFormat.format(date)

	const today = new Date()
	const yesterday = new Date(today).setDate(today.getDate() - 1)

	if (dateString === dateFormat.format(today)) {
		dateString = 'Today'
	} else if (dateString === dateFormat.format(yesterday)) {
		dateString = 'Yesterday'
	}

	const timeFormat = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' })
	const dateTime = timeFormat.format(date)

	return `${dateString} • ${dateTime}`
}
