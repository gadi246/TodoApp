

export const todo = (state, action) => {
  switch (action.type){
    case 'ADD_TODO':
          return {
            id: action.id,
            text: action.text,
            completed: false,
            edit: false
          };
    case 'TOGGLE_TODO':
          return state.id === action.id ? Object.assign({},state,{completed:!state.completed}):state;
    case 'EDIT_TODO':
      return state.id === action.id ? Object.assign({},state,{edit:!state.edit}):state;
    case 'CHANGE_TODO':
      return state.id === action.id ? Object.assign({},state,{text: action.text}):state;
    default:
          return state;
  }
};
