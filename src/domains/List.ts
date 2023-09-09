import { Item } from './Item.ts';

export class List {
  private _list: Item[] = [];

  get items() {
    return this._list;
  }

  addItem(item: Item) {
    this._list.push(item);
  }

  private findItemById(id: string) {
    return this._list.find((item) => item.id === id);
  }

  removeItemById(id: string) {
    const item = this.findItemById(id);
    if (!item) return;
    this._list = this._list.filter((item) => item.id !== id);
  }

  isEmpty() {
    return this._list.length === 0;
  }
}
