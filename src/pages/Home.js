import React, { Component } from 'react'
import ViewTodos from '../components/Home/ViewTodos'

import '../_core/css/Home.css';

export default class Home extends Component {

  componentDidMount(){
    this.props.todo.todoList.loadFromStorage(); {/* na samym początku wypadałoby załadować naszą listę z cookies */}
  }

  render() {
    const {todo} = this.props;
    return (
      <div className="container">
        <ViewTodos todo={todo}/> {/* przekazuję todo do komponentu ViewTodos jako props.todo */}
        
      </div>
    )
  }
}