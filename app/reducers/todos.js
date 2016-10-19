import {todo} from './todo';

export const todos = (state=[], action) => {
  switch (action.type){
    case 'ADD_TODO':
          return [...state,todo(undefined,action)];
    case 'REMOVE_TODO':
          return state.filter(t => t.id !== action.id);
    case 'TOGGLE_TODO':
          return state.map((t) => todo(t, action));
    case 'EDIT_TODO':
    return state.map((t) => todo(t, action));
    case 'CHANGE_TODO':
      return state.map((t) => todo(t, action));
    default:
          return state;
  }
};

