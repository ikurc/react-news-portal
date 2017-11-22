import ServerRequest from './ServerRequest';

class Paper {
	// hardcode
	constructor(name) {
		this.name = name;
		this.subscribers = []
	}

	subscribeSubscribers = (fn) => {
		this.subscribers.push(fn)
	};

	unSubscribeSubscribers = (fn) => {
		this.subscribers = this.subscribers.filter(portal => portal !== fn)
	};

	notifySubscribers = (data) => {
		let subscribers = this.subscribers;
		if (subscribers) subscribers.forEach(portal => portal(this.name, data))
	};

    getFromServer = (requestURL, paper) => {
        return ServerRequest.fetchNews(requestURL, paper);
    };

	getFromInput = (data) => {
		this.notifySubscribers(data);
	}
}

export default Paper
