import { ListStorage } from '../application/AddItemToList.ts';
import { List } from '../domains/List.ts';

export class ListStorageGateway implements ListStorage {
  private _list: List;

  constructor() {
    this._list = new List();
  }

  store(list: List): List {
    this._list = list;
    return this._list;
  }

  load(): List {
    return this._list;
  }
}
