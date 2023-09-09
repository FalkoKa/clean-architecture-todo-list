import { ListStorage } from '../application/AddItemToList.ts';
import { List } from '../domains/List.ts';
import { Item } from '../domains/Item.ts';
import { v4 as uuidv4 } from 'uuid';

export class ListStorageMock implements ListStorage {
  private _list: List;

  constructor() {
    this._list = new List();
    const item = new Item(uuidv4, 'do homework');
    this._list.addItem(item);
  }

  store(list: List): List {
    this._list = list;
    return this._list;
  }
  load(): List {
    return this._list;
  }
}
