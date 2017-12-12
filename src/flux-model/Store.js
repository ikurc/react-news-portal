import { EventEmitter } from 'events'
import Dispatcher from './Dispatcher'
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
    this.emit('change')
  }

  addUser(user) {
    this.users.push(user)
    this.emit('change')
  }

  subscribe(paper, user) {
    this.portal.subscribe(paper, user)
    this.emit('change')
  }

  unSubscribe(paper, user) {
    this.portal.unSubscribe(paper, user)
    this.emit('change')
  }

  subscribePortalOnPapers(papers) {
    papers.forEach(paper => paper.subscribe(this.portal.notify))
    this.emit('change')
  }

  unSubscribeFromAllEvents(user) {
    this.portal.unSubscribeFromAllEvents(user)
    this.emit('change')
  }

  deleteUser(ID) {
    let usersList = this.users;
    this.users = usersList.filter(user => user.ID !== ID)
    this.emit('change')
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

  getUserNews = (ID) => {
    let user = this.users.filter(u => u.ID == ID)[0]
    return user.getUserNews()
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
        break;

      case 'DEL_USER':
        this.deleteUser(action.ID)
        break;

      case 'SUBSCRIBE':
        this.subscribe(action.paper, action.user)
        break;

      case 'UNSUBSCRIBE':
        this.unSubscribe(action.paper, action.user)
        break;

      case 'GET_PAPER_NEWS':
        this.getPaperNews(action.paper)
        break;

      case 'GET_USER_NEWS':
        this.getUserNews(action.ID)
        break;

      case 'UNSUB_ALL_EVENTS':
        this.unSubscribeFromAllEvents(action.user)
        break;

      case 'SUB_PORTAL_ON_PAPERS':
        this.subscribePortalOnPapers(action.papers)
        break;

      default:
        break;
    }
  }
}



export default Store
