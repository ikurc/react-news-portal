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

  delUser(id) {
    Dispatcher.dispatch({
      type: 'DEL_USER',
      id
    })
  }
}

export default Actions
