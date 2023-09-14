import { AbstractUseCase } from './AbstractUseCase.ts';
import {
  ListPresenter,
  ListStorage,
  PresentableList,
} from './AddItemToList.ts';

export interface EditItemTitleAdapter {
  listStorage: ListStorage;
  listPresenter: ListPresenter;
}

export type EditInput = {
  id: string;
  newTitle: string;
};

export class EditItemTitle extends AbstractUseCase<EditInput, void> {
  constructor(private readonly _adapters: EditItemTitleAdapter) {
    super();
  }

  execute({ id, newTitle }: EditInput): void {
    this._adapters.listPresenter.startLoading();
    const list = this._adapters.listStorage.load();
    const itemToEdit = list.findItemById(id);
    itemToEdit?.editTitle(newTitle);
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
