import EventEmitter from "./EventEmitter"

class Portal extends EventEmitter {
	constructor(name, storage) {
		super();
		this.name = name
		this.views = []
		this.storage = storage
	}

	on = (view) => {
		this.views.push(view)
	}

	trigger = (data) => {
		this.views.forEach( view => view(data))
	}
}

export default Portal
