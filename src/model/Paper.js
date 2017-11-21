import News from './News'

class Paper {
	// hardcode
	constructor(name) {
		this.name = name
		this.portals = []
	}

	subscribePortal = (fn) => {
		this.portals.push(fn)
	}

	unSubscribePortal = (fn) => {
		this.portals = this.portals.filter(portal => portal !== fn)
	}

	notifyPortals = (data) => {
		let portals = this.portals
		if (portals) portals.forEach(portal => portal(this.name, data))
	}

	getFromServer = () => {
		let link = 'https://jsonplaceholder.typicode.com/posts'

		// Get news
		return fetch(link).then(response => response.json())
		.then(news => {
			let random = Math.floor(news.length * Math.random())
			return news[random] //get random article
		})
		.then(newsItem => {
			let news = new News(newsItem.title, this)
			this.notifyPortals(news)
			return news
		})
		.catch(error => console.log(error))
	}

	getFromInput = (data) => {
		this.notifyPortals(data)
		// return data (maybe)
	}
}

export default Paper
