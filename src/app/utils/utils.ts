export function convertDateToShow(date: string): string {
	const incomingDate = date.split('/')
	const outgoingDate = `${incomingDate[2]}-${incomingDate[0]}-${incomingDate[1]}`
	return outgoingDate
}