import App from '../views/App/App';
import {Container} from 'flux/utils';
import Store from '../data/Store';
import Actions from '../data/Actions';

function getStores() {
  return [Store]
}

function getState() {
  return {
    todos: Store.getState(),
    onAddUser: Actions.addUser,
    onRemoveUser: Actions.removeUser,
  };
}

export default Container.createFunctional(App, getStores, getState);
