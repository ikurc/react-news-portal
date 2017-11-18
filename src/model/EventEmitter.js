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
		let readers = this.events[eventType]
		this.events[eventType] = readers.filter(fn => fn != fnToRemove);

		// Delete if last
		if (this.events[eventType] != []) {
			this.events = {}
		}
	}

	// Check if subscriber
	isSubscriber(eventType, fn) {
		let readers = this.events[eventType]
		if (readers) {
			return readers.includes(fn)
		}
	}

	// Notify all readers
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
