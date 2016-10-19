import React    from 'react';
import ReactDOM from 'react-dom';
import  {Store} from './stores/store';
import  {TodoApp} from './components/todo-app';

class Root extends React.Component {
  constructor(){
    super();
    Store.dispatch = Store.dispatch.bind(this);
  }
  changeState(){
    let {todos,visibilityFilter} = Store.getState();

    this.setState({todos,visibilityFilter});
  }
  componentWillMount(){
    this.changeState();
  }
  componentDidMount(){
    this.unsubscribe = Store.subscribe(()=>{
      this.changeState();
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <TodoApp dispatch={Store.dispatch} todos={this.state.todos} visibilityFilter={this.state.visibilityFilter}/>
    )
  }
}

ReactDOM.render(<Root/>, document.querySelector('#root'));
