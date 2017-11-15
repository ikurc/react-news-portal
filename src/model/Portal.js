import EventEmitter from "./EventEmitter"

class Portal extends EventEmitter {
	constructor(name) {
		super();
		this.name = name
	}
}

export default Portal
