import { AddItemToList } from '../../application/AddItemToList.ts';
import { RemoveItemFromList } from '../../application/RemoveItemFromList.ts';
import { Item } from '../../domains/Item.ts';
import { v4 as uuidv4 } from 'uuid';

export interface UseCases {
  addItemToList: AddItemToList;
  removeItemFromList: RemoveItemFromList;
  changeItemStatus: any;
  editItemTitle: any;
}

export class Controller {
  constructor(private readonly _useCases: UseCases) {}

  executeAddItemToList(itemTitle: string) {
    const item = new Item(uuidv4, itemTitle);
    return this._useCases.addItemToList.execute({ item });
  }

  executeRemoveItemFromList(id: string) {
    return this._useCases.removeItemFromList.execute(id);
  }
}
