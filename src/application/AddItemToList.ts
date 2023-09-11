import { AbstractUseCase } from './AbstractUseCase.ts';
import { Item } from '../domains/Item.ts';
import { List } from '../domains/List.ts';

export type PresentableListItem = {
  id: string;
  title: string;
  status: boolean;
};

export type PresentableList = PresentableListItem[];

export interface ListStorage {
  load(): List;
  store(list: List): List;
}

export interface ListPresenter {
  startLoading(): void;
  finishLoading(): void;
  displayList(list: PresentableList): void;
}

export interface AddItemToListAdapter {
  listStorage: ListStorage;
  listPresenter: ListPresenter;
}

export class AddItemToList extends AbstractUseCase<{ item: Item }, void> {
  constructor(private readonly _adapters: AddItemToListAdapter) {
    super();
  }

  execute({ item }: { item: Item }): void {
    this._adapters.listPresenter.startLoading();
    const list = this._adapters.listStorage.load();
    list.addItem(item);
    this._adapters.listStorage.store(list);
    const presentbaleList = list.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        status: item.status,
      };
    });
    this._adapters.listPresenter.displayList(presentbaleList);
    this._adapters.listPresenter.finishLoading();
  }
}
