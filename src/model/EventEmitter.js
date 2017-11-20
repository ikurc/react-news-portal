class EventEmitter {
	constructor() {
		this.events = {}
	}

	subscribe = (eventType, fn) => {
		let readers = this.events[eventType]

		if (!readers) {
			this.events[eventType] = []
		}
		this.events[eventType].push(fn)
	}

	unSubscribe = (eventType, fnToRemove) => {
		let readers = this.events[eventType]
		this.events[eventType] = readers.filter(fn => fn !== fnToRemove)
		// delete if last feature next --->
	}

	// Check if subscriber
	isSubscriber = (eventType, fn) => {
		let readers = this.events[eventType]
		return readers ? readers.includes(fn) : false
	}

	// Notify all readers
	notify = (eventType, data) => {
		let readers = this.events[eventType]
		readers ? readers.forEach(reader => reader(data)) : false
	}
}

export default EventEmitter
