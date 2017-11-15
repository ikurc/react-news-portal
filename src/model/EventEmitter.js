class EventEmitter {
	constructor() {
		this.events = {}
	}

	subscribe(eventType, fn) {
		if (!this.events[eventType]) {
			this.events[eventType] = []
		}
		this.events[eventType].push(fn)
	}

	unSubscribe(eventType, fnToRemove) {
		this.events[eventType].filter(fn => fn != fnToRemove);
		// if last delete
	}

	notify = (eventType, data) => {
		let readers = this.events[eventType];
		readers.forEach(reader => reader(data))
	}
}

export default EventEmitter
