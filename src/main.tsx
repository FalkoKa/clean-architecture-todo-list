import React from 'react';

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

type State = {
  listContext?: ViewModel;
};

type Props = {};

export class Main extends React.PureComponent<Props, State> {
  private readonly _controller: Controller;
  private _adapters: AddItemToListAdapter;
  private readonly _useCases: UseCases;

  constructor(props: Props) {
    super(props);
    this._adapters = {
      listStorage: new ListStorageGateway(),
      listPresenter: new Presenter(this),
    };

    this._useCases = {
      addItemToList: new AddItemToList(this._adapters),
    };

    this._controller = new Controller(this._useCases);

    this.state = {};
  }

  componentDidMount() {
    this.renderListPage(createInitialViewModel());
  }

  public renderListPage(viewModel: ViewModel): void {
    this.setState({
      ...this.state,
      listContext: viewModel,
    });
  }

  render(): React.ReactElement {
    return (
      <>
        <div>Test</div>
      </>
    );
  }
}
