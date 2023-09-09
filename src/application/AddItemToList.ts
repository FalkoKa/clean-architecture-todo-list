import { AbstractUseCase } from './AbstractUseCase.ts';
import { Item } from '../domains/Item.ts';
import { List } from '../domains/List.ts';

export interface ListStorage {
  load(): List;

  store(list: List): List;
}

export interface ListPresenter {
  startLoading(): void;

  finishLoading(): void;

  displayList(list: List): void;
}

export interface AddItemToListAdapter {
  listStorage: ListStorage;
  listPresenter: ListPresenter;
}

export class AddItemToList extends AbstractUseCase<{ item: Item }, void> {
  // just Item??

  constructor(private readonly _adapters: AddItemToListAdapter) {
    super();
  }

  execute({ item }: { item: Item }): Promise<void> | void {
    this._adapters.listPresenter.startLoading();
    const list = this._adapters.listStorage.load();
    list.addItem(item);
    const newList = this._adapters.listStorage.store(list);
    console.log(newList);
    this._adapters.listPresenter.displayList(newList);
    this._adapters.listPresenter.finishLoading();
  }
}
