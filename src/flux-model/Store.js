import { EventEmitter } from 'events'
import Paper from '../model/Paper'
import News from '../model/News'
import Portal from '../model/Portal'

import Dispatcher from './Dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()
    this.portal = new Portal('React News Portal')
    this.papers = [
      new Paper("The Guardian"),
      new Paper("The Independent"),
      new Paper("The New York Times")
    ]
    this.users = []
    this.news = []
  }

  addNews = (news) => {
    this.news.push(news)
    this.emit('change')
  }

  getUsers = () => {
    return this.users
  }

  getPapers = () => {
    return this.papers
  }

  getNews = () => {
    return this.news
  }

  getPaperNews = (paperName) => {
    return this.news.filter(news => news.paperName === paperName)
  }

  getPortal = () => {
    return this.portal
  }

  handle = (action) => {
    switch (action.type) {
      case 'ADD_NEWS':
        this.addNews(action.news)
        break;
    }
  }
}

const store = new Store()
Dispatcher.register(store.handle)
window.Dispatcher = Dispatcher

export default store
