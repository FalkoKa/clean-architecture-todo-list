import { AddItemToList, AddItemToListAdapter } from './AddItemToList.ts';
import { ListStorageGateway } from '../adapters/ListStorage.ts';
import { Presenter } from '../adapters/Presenter/ListPresenter.ts';
import { ViewModel } from '../adapters/Presenter/ViewModel.ts';
import { Item } from '../domains/Item.ts';

describe('Add Item To List', () => {
  const renderSpy = jest.fn();
  const presenter = new Presenter(renderSpy);

  it('can be executed and adds item to list', () => {
    const adapters: AddItemToListAdapter = {
      listStorage: new ListStorageGateway(),
      listPresenter: presenter,
    };

    const useCase = new AddItemToList(adapters);

    const itemToAdd = { title: 'go to school' };

    useCase.execute(itemToAdd);

    const expectedRendersForItem: ViewModel = {
      global: {
        isLoading: true,
      },
      list: [],
    };
  });
});
