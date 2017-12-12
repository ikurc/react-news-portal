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
    console.log("Actions")
    Dispatcher.dispatch({
      type: 'GET_PAPER_NEWS',
      paper
    })
  },

  unSubscribeFromAllEvents(user) {
    Dispatcher.dispatch({
      type: 'UNSUB_ALL_EVENTS',
      user
    })
  }
}

export default Actions
