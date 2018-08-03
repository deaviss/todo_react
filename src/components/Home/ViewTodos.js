import React, { Component } from 'react'
import { observer } from 'mobx-react';

import Item from './Item'

import '../../_core/css/Home.css';

export default observer(class ViewTodos extends Component {
  render() {
    const {todo} = this.props;
    return (
      <div className="list">
        <h1 class="header"> To do. </h1>

        <ul className="items">
          {todo.todoList.todos.map((item, i) =>(
            <Item item={item} key={i}/>
          ))}
        </ul>
        <form className="item-add" onSubmit={e=>{
          const date = new Date();
          e.preventDefault();
          todo.todoList.add({
            id: `${date.toDateString()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toFixed(0)}`,
            name: this.nameInput.value
          });
          e.target.reset();
          this.nameInput.focus();
        }}>
          <label htmlFor="name">
            <input 
            autoComplete="off"
            placeholder="Treść nowego zadania"
            type="text" 
            className="input"
            ref={input => (this.nameInput = input)} 
            id="name"
            />
          </label>
          <button type="submit" className="submit">Dodaj nowe zadanie</button>
        </form>
        
        
      </div>
    )
  }
})
