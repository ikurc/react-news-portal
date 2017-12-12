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

  addNews = (news) => {
    this.news.push(news)
    this.emit('change')
  }

  addUser = (user) => {
    this.users.push(user)
    this.emit('change')
  }

  subscribe = (paper, user) => {
    this.portal.subscribe(paper, user)
    this.emit('change')
  }

  unSubscribe = (paper, user) => {
    this.portal.unSubscribe(paper, user)
    this.emit('change')
  }

  unSubscribeFromAllEvents = (user) => {
    this.portal.unSubscribeFromAllEvents(user)
    this.emit('change')
  }

  deleteUser = (ID) => {
    console.log(this.users)
    let usersList = this.users;
    this.users = usersList.filter(user => user.ID !== ID)
    console.log(this.users)
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

  getPaperNews = (paper) => {

    console.log("sad")
    return this.news.filter(news => news.paper === paper)
  }

  getPortal = () => {
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

      case 'UNSUB_ALL_EVENTS':
        this.unSubscribeFromAllEvents(action.user)
        break;
    }
  }
}



export default Store
