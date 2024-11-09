export function humanFileSize(bytes: number, si = false, dp = 1) {
	let newBytes = bytes
	const thresh = si ? 1000 : 1024

	if (Math.abs(bytes) < thresh) {
		return `${bytes} B`
	}

	const units = si
		? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
	let u = -1
	const r = 10 ** dp

	do {
		newBytes = bytes / thresh
		++u
	} while (
		Math.round(Math.abs(newBytes) * r) / r >= thresh &&
		u < units.length - 1
	)

	return `${newBytes.toFixed(dp)} ${units[u]}`
}
