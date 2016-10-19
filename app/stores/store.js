import  {createStore,combineReducers} from 'redux';
import {todos} from '../reducers/todos';
import {visibilityFilter} from '../reducers/visibility-filter';

const reducers = combineReducers({todos,visibilityFilter});
export const Store = createStore(reducers);

Store.subscribe(() =>
  console.log(Store.getState())
);
console.log('ready',Store.getState());
