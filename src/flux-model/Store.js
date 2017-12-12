import { EventEmitter } from 'events'
import Paper from '../model/Paper'
import Portal from '../model/Portal'

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

  addNews(news) {
    this.news.push(news)
  }

  addUser(user) {
    this.users.push(user)
  }

  subscribe(paper, user) {
    this.portal.subscribe(paper, user)
  }

  unSubscribe(paper, user) {
    this.portal.unSubscribe(paper, user)
  }

  unSubscribeFromAllEvents(user) {
    this.portal.unSubscribeFromAllEvents(user)
  }

  deleteUser(ID) {
    let usersList = this.users;
    this.users = usersList.filter(user => user.ID !== ID)
  }

  getUsers() {
    return this.users
  }

  getPapers() {
    return this.papers
  }

  getNews() {
    return this.news
  }

  getPaperNews = (paper) => {
    return this.news.filter(news => news.paper === paper)
  }

  getPortal() {
    return this.portal
  }

  handle = (action) => {
    switch (action.type) {
      case 'ADD_NEWS':
        this.addNews(action.news)
        break;

      case 'ADD_USER':
        this.addUser(action.user)
        this.emit('change')
        break;

      case 'DEL_USER':
        this.deleteUser(action.ID)
        this.emit('change')
        break;

      case 'SUBSCRIBE':
        this.subscribe(action.paper, action.user)
        this.emit('change')
        break;

      case 'UNSUBSCRIBE':
        this.unSubscribe(action.paper, action.user)
        this.emit('change')
        break;

      case 'GET_PAPER_NEWS':
        this.getPaperNews(action.paper)
        this.emit('change')
        break;

      case 'UNSUB_ALL_EVENTS':
        this.unSubscribeFromAllEvents(action.user)
        this.emit('change')
        break;
      default:
        break;
    }
  }
}



export default Store
