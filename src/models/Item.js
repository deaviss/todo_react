import { getParent, types } from 'mobx-state-tree';

const Item = types.model("Item", {
  id: types.string,
  name: types.string,
  is_done: false,
  done_time: ""
})
.actions(self => ({
  markDone(){
    const date = new Date();
    self.is_done = !self.is_done;
    self.done_time = `${date.toDateString()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toFixed(0)}`;
    getParent(self, 2).saveToStorage();
  },
  remove (){
    getParent(self, 2).remove(self); // cofa sie do rodzica (1-Item, 2-ToDoList) i używa jego funkcji
  }
}))
export default Item;