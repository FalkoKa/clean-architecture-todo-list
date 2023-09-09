import {ListPresenter} from "../../application/AddItemToList.ts";
import {List} from "../../domains/List.ts";
import {createInitialViewModel, ViewModel} from "./ViewModel.ts";

export interface RendersListPage {
    renderListPage(viewModel: ViewModel): void
}

export class Presenter implements ListPresenter {
    private _state: ViewModel = createInitialViewModel()

    constructor(private readonly _renderer: RendersListPage) {
    }

    displayList(list: List): void {
        this._state.list = list.items
        console.log(this._state.list)
        this._renderer.renderListPage(this._state)
    }

    startLoading(): void {
        this._state.global.isLoading = true
        this._renderer.renderListPage(this._state)
    }

    finishLoading(): void {
        this._state.global.isLoading = false
        this._renderer.renderListPage(this._state)
    }
}