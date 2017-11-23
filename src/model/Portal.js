import EventEmitter from "./EventEmitter"

class Portal extends EventEmitter {
	constructor(name, storage) {
		super();
		this.name = name
		this.storage = storage
		this.handlers = [] //view`s updateState methods
	}

	// subscribe updateState method
	on = (fn) => {
		this.handlers.push(fn)
	}

	off = (fnToRemove) => {
		this.handlers = this.handlers.filter(fn => fn !== fnToRemove)
	}

	trigger = (data) => {
		this.handlers.forEach(fn => fn(data))
	}
}

export default Portal
