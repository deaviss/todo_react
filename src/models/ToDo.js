import { types } from 'mobx-state-tree';
import ToDoList from './ToDoList';

const ToDo = types.model('ToDo', {
  todoList: types.optional(ToDoList, { todos: [] })
})

export default ToDo;