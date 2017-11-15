class Paper {
	constructor(name) {
		this.name = name;
		this.portals = []
	}

	subscribePortal(fn) {
		this.portals.push(fn);
	}

	unSubscribePortal(fn) {
		this.portals = this.portals.filter(portal => portal !== fn)
	}

	notifyPortals(data) {
		this.portals.forEach(portal => portal(this.name, data))
	}

	getFromServer() {
		serverReq.fetchNews('docs/news.json', this);
	}

	getFromInput(data) {
		this.notifyPortals(data)
	}
}

export default Paper
