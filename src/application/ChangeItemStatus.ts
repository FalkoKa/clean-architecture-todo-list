import { AbstractUseCase } from './AbstractUseCase.ts';
import {
  ListPresenter,
  ListStorage,
  PresentableList,
} from './AddItemToList.ts';

export interface ChangeItemStatusAdapter {
  listStorage: ListStorage;
  listPresenter: ListPresenter;
}

export class ChangeItemStatus extends AbstractUseCase<string, void> {
  constructor(private readonly _adapters: ChangeItemStatusAdapter) {
    super();
  }

  execute(id: string): void {
    this._adapters.listPresenter.startLoading;
    const list = this._adapters.listStorage.load();
    const itemToChangeStatus = list.findItemById(id);
    itemToChangeStatus?.changeStatus();
    this._adapters.listStorage.store(list);
    const presentbaleList: PresentableList = list.items.map((item) => {
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
