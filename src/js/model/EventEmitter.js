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

	unSubscribeFromAllPapers(user) {
		for (let key in this.events) {
			this.events[key] = this.events[key].filter(u => u !== user)
		}
	}

	// Notify all readers
	notify = (eventType, data) => {
		let readers = this.events[eventType]
		if (readers) readers.forEach(reader => reader(data))
	}
}

export default EventEmitter
