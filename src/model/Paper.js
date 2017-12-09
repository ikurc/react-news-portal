class Paper {
	constructor(name) {
		this.name = name
		this.handlers = [] //portals "notify" method
	}

	subscribe = (fn) => {
		this.handlers.push(fn)
	}

	unSubscribe = (fn) => {
		this.handlers = this.handlers.filter(handler => handler !== fn)
	}

	notifyHandlers = (data) => {
		let handlers = this.handlers
		if (handlers) handlers.forEach(handler => handler(this.name, data))
	}

	getFromInput = (data) => {
		this.notifyHandlers(data)
	}
}

export default Paper
