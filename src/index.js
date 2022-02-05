/**
 * Adds `on` appropriately before calculated time difference from `humango` function
 * @function
 * @param {string} diff - Human readable time difference
 */
const addOn = (diff) => {
	if(parseInt(diff.charAt(0))) {
		return diff;
	} else {
		if(diff.charAt(0) === 'J') {
			return diff;
		}
		return `on ${diff}`;
	}
};

/**
 * Main function that calculates human readable time difference
 * @function
 * @param {timestamp} date - Timestamp in milliseconds
 */
const humango = (date) => {
	try {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		const prev = new Date(date);
		const now = new Date();

		let res;

		if(prev === 'Invalid Date') {
			throw new Error(`Invalid Date`);
		}

		if(now.getFullYear() === prev.getFullYear()) {
			if(now.getMonth() === prev.getMonth()) {
				if(now.getDate() === prev.getDate()) {
					if(now.getHours() === prev.getHours()) {
						if(now.getMinutes() === prev.getMinutes()) {
							if(now.getSeconds() === prev.getSeconds()) {
								res = `Just now`;
							} else {
								const diff = now.getSeconds() - prev.getSeconds();
								res = `${diff} ${(diff === 1) ? 'second ago' : 'seconds ago' }`;
							}
						} else {
							const diff = now.getMinutes() - prev.getMinutes();
							res = `${diff} ${(diff === 1) ? 'minute ago' : 'minutes ago' }`;
						}
					} else {
						const diff = now.getHours() - prev.getHours();
						res = `${diff} ${(diff === 1) ? 'hour ago' : 'hours ago' }`;
					}
				} else {
					const diff = now.getDate() - prev.getDate();
					res = `${diff} ${(diff === 1) ? 'day ago' : 'days ago' }`;
				}
			} else {
				res = `${months[prev.getMonth()]} ${prev.getDate()}`;
			}
		} else {
			res = `${months[prev.getMonth()]} ${prev.getDate()}, ${prev.getFullYear()}`;
		}

		return addOn(res);
	} catch(err) {
		throw err;
	}
};

module.exports = humango;