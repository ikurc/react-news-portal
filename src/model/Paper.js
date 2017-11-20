import serverReq from './ServerRequest'
import News from './News'

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
		console.log("notifyPortals (Paper)")
		this.portals.forEach(portal => portal(this.name, data))
	}

	getFromServer = () => {
		console.log("getFromServer (Paper)")
		let link = 'https://jsonplaceholder.typicode.com/posts'

		// Get news
		return fetch(link).then(response => response.json())
		.then(news => {
			let random = Math.floor(news.length * Math.random())
			return news[random] //get random article
		})
		.then(newsItem => {
			let news = new News(newsItem.title, this)
			console.log("news item created")
			this.notifyPortals(news)
		})
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
