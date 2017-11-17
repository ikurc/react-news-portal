class EventEmitter {
	constructor() {
		this.events = {}
	}

	subscribe = (eventType, fn) => {
		if (!this.events[eventType]) {
			this.events[eventType] = []
		}
		this.events[eventType].push(fn)
	}

	unSubscribe = (eventType, fnToRemove) => {
		this.events[eventType].filter(fn => fn != fnToRemove);
	}

	notify = (eventType, data) => {
		let readers = this.events[eventType];
		if (readers) {
			readers.forEach(reader => reader(data))
		} else {
			return
			// throw new Error("Any reader isnt exists!")
		}
	}
}

export default EventEmitter
