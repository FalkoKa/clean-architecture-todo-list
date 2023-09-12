import { List } from '../domains/List.ts';
import { AbstractUseCase } from './AbstractUseCase.ts';
import {
  ListPresenter,
  ListStorage,
  PresentableList,
} from './AddItemToList.ts';

export interface RemoveItemFromListAdapter {
  listStorage: ListStorage;
  listPresenter: ListPresenter;
}

export class RemoveItemFromList extends AbstractUseCase<string, void> {
  constructor(private readonly _adapters: RemoveItemFromListAdapter) {
    super();
  }

  execute(id: string): void {
    this._adapters.listPresenter.startLoading();
    const list: List = this._adapters.listStorage.load();
    list.removeItemById(id);
    this._adapters.listStorage.store(list);
    const presentableList: PresentableList = list.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        status: item.status,
      };
    });
    this._adapters.listPresenter.displayList(presentableList);
    this._adapters.listPresenter.finishLoading();
  }
}
