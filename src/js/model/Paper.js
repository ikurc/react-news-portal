import ServerRequest from './ServerRequest';

class Paper {
	// hardcode
	constructor(name) {
		this.name = name;
		this.portals = []
	}

	subscribePortal = (fn) => {
		this.portals.push(fn)
	};

	unSubscribePortal = (fn) => {
		this.portals = this.portals.filter(portal => portal !== fn)
	};

	notifyPortals = (data) => {
		let portals = this.portals;
		if (portals) portals.forEach(portal => portal(this.name, data))
	};

    getFromServer = (requestURL, paper) => {
        return ServerRequest.fetchNews(requestURL, paper);
    };

	getFromInput = (data) => {
		this.notifyPortals(data);
		// return data (maybe)
	}
}

export default Paper
