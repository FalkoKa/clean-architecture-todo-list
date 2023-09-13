import React from 'react';
import ListPage from './outer/react/ListPage.tsx';
import { Provider } from './outer/react/Provider.ts';
import { Controller, UseCases } from './adapters/Controller/Controller.ts';
import {
  AddItemToList,
  AddItemToListAdapter,
} from './application/AddItemToList.ts';
import { Presenter } from './adapters/Presenter/ListPresenter.ts';
import { ListStorageGateway } from './adapters/ListStorage.ts';
import {
  createInitialViewModel,
  ViewModel,
} from './adapters/Presenter/ViewModel.ts';
import { RemoveItemFromList } from './application/RemoveItemFromList.ts';
import { ChangeItemStatus } from './application/ChangeItemStatus.ts';

type State = {
  viewModel?: ViewModel;
};

type Props = {};

export class Main extends React.PureComponent<Props, State> {
  private readonly _controller: Controller;
  private readonly _adapters: AddItemToListAdapter;
  private readonly _useCases: UseCases;

  constructor(props: Props) {
    super(props);
    this._adapters = {
      listStorage: new ListStorageGateway(),
      listPresenter: new Presenter(this),
    };

    this._useCases = {
      addItemToList: new AddItemToList(this._adapters),
      removeItemFromList: new RemoveItemFromList(this._adapters),
      changeItemStatus: new ChangeItemStatus(this._adapters),
      editItemTitle: {},
    };

    this._controller = new Controller(this._useCases);

    this.state = {};
  }

  componentDidMount() {
    this.renderListPage(createInitialViewModel());
  }

  public renderListPage(viewModel: ViewModel): void {
    this.setState({ viewModel });
  }

  render(): React.ReactElement {
    const { viewModel } = this.state;
    return (
      <>
        <Provider value={{ controller: this._controller }}>
          {viewModel && <ListPage viewModel={viewModel} />}
        </Provider>
      </>
    );
  }
}
