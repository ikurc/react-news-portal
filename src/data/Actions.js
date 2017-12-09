import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  addUser(user) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_USER,
      user,
    });
  },

  removeUser(userId) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_USER,
      userId,
    });
  },
};

export default Actions
