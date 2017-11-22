import News from './News'

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
			this.notifyHandlers(news)
			return news
		})
		.catch(error => console.log(error))
	}

	getFromInput = (data) => {
		this.notifyHandlers(data)
	}
}

export default Paper
