import { types } from 'mobx-state-tree';
import Item from "./Item";


const ToDoList = types.model("ToDoList", {
  todos: types.array(Item)
}).actions(self => ({
  loadFromStorage(){
    let stor = JSON.parse(localStorage.getItem("todos"));
    if(!stor){
      stor = [];
    }
    self.todos = [];
    stor.map((itm, i) => (
      self.todos.push(itm)
    ))
  },
  saveToStorage(){
    localStorage.setItem("todos", JSON.stringify(self.todos));
  },
  clearLocalStorage(){
    localStorage.removeItem("todos");
  },
  add(item){
    self.todos.push(item)
    localStorage.setItem("todos", JSON.stringify(item));
    self.saveToStorage();
  },
  remove(item){
    self.todos.splice(self.todos.indexOf(item), 1)
    self.saveToStorage();
  }
}))

export default ToDoList;
