import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_USER:
        return state.filter(todo => !todo.complete);

      case ActionTypes.REMOVE_USER:
        return state.filter(todo => !todo.complete);

      default:
        return state;
    }
  }
}

export default new Store();
