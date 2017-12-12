import Dispatcher from './Dispatcher'

const Actions = {
  addNews(news) {
    Dispatcher.dispatch({
      type: 'ADD_NEWS',
      news
    })
  },

  addUser(user) {
    Dispatcher.dispatch({
      type: 'ADD_USER',
      user
    })
  },

  deleteUser(ID) {
    Dispatcher.dispatch({
      type: 'DEL_USER',
      ID
    })
  },

  subscribe(paper, user) {
    Dispatcher.dispatch({
      type: 'SUBSCRIBE',
      paper,
      user
    })
  },

  unsubscribe(paper, user) {
    Dispatcher.dispatch({
      type: 'UNSUBSCRIBE',
      paper,
      user
    })
  },

  getPaperNews(paper) {
    Dispatcher.dispatch({
      type: 'GET_PAPER_NEWS',
      paper
    })
  },

  getUserNews(ID) {
    Dispatcher.dispatch({
      type: 'GET_USER_NEWS',
      ID
    })
  },

  subscribePortalOnPapers(papers) {
    Dispatcher.dispatch({
      type: 'SUB_PORTAL_ON_PAPERS',
      papers
    })
  },

  unSubscribeFromAllEvents(user) {
    Dispatcher.dispatch({
      type: 'UNSUB_ALL_EVENTS',
      user
    })
  },
}

export default Actions
