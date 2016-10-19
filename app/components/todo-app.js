import  React from 'react';
import {addTodo, _toggleTodo,_removeTodo,_editTodo,_changeTodo} from '../action-creators/action-creator';
import {FilterLink} from './filter-link';
import {Icon} from './font-awsome';

export class TodoApp extends React.Component {
  constructor() {
    super();
    this.getFilteredList = this.getFilteredList.bind(this);
    this.submitTodoItem = this.submitTodoItem.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      txt:''
    };
  }
  changeState(e) {
    this.setState({
      txt: e.target.value
    });
  }
  submitTodoItem(){
    this.props.dispatch(addTodo(this.state.txt));
    this.setState({
      txt:''
    });
    this.input.focus();
  }

  getFilteredList(filter, todos) {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'COMPLETED':
        return todos.filter(t => t.completed);
      case 'ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;

    }
  }

  render() {
    const {todos, visibilityFilter} = this.props;
    const visibleTodos = this.getFilteredList(visibilityFilter, todos);
    return (
      <div>
        <h1>MY TODO LIST</h1>
        <input type="text"
               placeholder="Type some todos..."
               ref={node => this.input = node}
               value={this.state.txt}
               onChange={this.changeState}
               onKeyDown={(e) => {
                 if(e.keyCode === 13){
                   this.submitTodoItem();
                     }
                    }
                   }/>
        <button className="add-btn" onClick={this.submitTodoItem}
        >Add Todos
        </button>
        <ul>
          {visibleTodos.map((todo) => {
            return <li key={todo.id}
                       onClick={() => {
                        this.props.dispatch(_toggleTodo(todo.id))}}
                            >{todo.edit ? <input type="text" value={todo.text}
                                                               onChange={(e) => {
                                                                this.props.dispatch(_changeTodo(todo.id,e.target.value));
                                                               }
                                                              }
                                                              onKeyDown={(e) => {
                                                             if(e.keyCode === 13){
                                                             this.props.dispatch(_editTodo(todo.id));
                                                                }
                                                               }
                                                              }
                                                               /> : <span>
                                                                       <input type="checkbox" id={todo.id} checked={todo.completed}/>
                                                                       <label htmlFor={todo.id}>{todo.text}</label>
                                                                   </span>
                                                                }
              <a href="#" className="icon"
                          onClick={(e) => {
                          e.preventDefault();
                          this.props.dispatch(_editTodo(todo.id))}}
              ><Icon name="pencil-square-o"></Icon></a>
              <a href="#" className="icon"
                 onClick={(e) => {
                          e.preventDefault();
                          this.props.dispatch(_removeTodo(todo.id))}}
              ><Icon name="times"></Icon></a>
            </li>
          })
          }
        </ul>
        <div>
          <p>{this.getFilteredList('ACTIVE',todos).length} Items left</p>
          Show:
          <FilterLink filter="ALL" dispatch={this.props.dispatch} currentfilter={visibilityFilter}>All</FilterLink>
          <FilterLink filter="COMPLETED" dispatch={this.props.dispatch}
                      currentfilter={visibilityFilter}>Completed</FilterLink>
          <FilterLink filter="ACTIVE" dispatch={this.props.dispatch}
                      currentfilter={visibilityFilter}>Active</FilterLink>
        </div>
      </div>

    )
  }
}
