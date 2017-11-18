import serverReq from './ServerRequest'

class Paper {
	// hardcode
	constructor(name) {
		this.name = name;
		this.portals = [];
	}

	subscribePortal = (fn) => {
		this.portals.push(fn);
	}

	unSubscribePortal = (fn) => {
		this.portals = this.portals.filter(portal => portal !== fn)
	}

	notifyPortals = (data) => {
		this.portals.forEach(portal => portal(this.name, data))
	}

	getFromServer = () => {

		let link = 'https://jsonplaceholder.typicode.com/posts'
		let newsStorage = fetch(link)

		// Get news
		newsStorage.then(response => response.json())
		.then(news => {
			let random = Math.floor(news.length * Math.random())
			return news[random] //get random article
		})
		.then(newsItem => this.notifyPortals(newsItem.title))
		.catch(error => console.log(error))
	}

	// Bogdana realizaciya
	// getFromServer = () => {
	// 	let data = serverReq.fetchNews('./news.json', this);
	// 	this.notifyPortals(data)
	// }

	getFromInput = (data) => {
		this.notifyPortals(data)
	}
}

export default Paper
