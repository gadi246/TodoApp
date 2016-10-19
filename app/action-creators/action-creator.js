
const addTodo = (text) => {
  return {
    type:'ADD_TODO',
    id: Date.now(),
    text: text
  }
};

const _toggleTodo = (id) => {
  return {
  type:'TOGGLE_TODO',
    id: id
  }
};
const _visibilityFilter = (filter) => {
  return {
    type:'SET_VISIBILITY_FILTER',
    filter: filter
  }
};
const _removeTodo = (id) => {
  return{
    type:'REMOVE_TODO',
    id: id
  } 
};
const _editTodo = (id) => {
  return{
    type:'EDIT_TODO',
    id: id
  }
};
const _changeTodo = (id,newText) => {
  return{
    type: 'CHANGE_TODO',
    id: id,
    text: newText
  }
};
export {addTodo,_toggleTodo,_visibilityFilter,_removeTodo,_editTodo,_changeTodo}

