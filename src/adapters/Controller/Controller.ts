import {AddItemToList} from "../../application/AddItemToList.ts";
import {Item} from "../../domains/Item.ts";
import { v4 as uuidv4 } from "uuid"
export interface UseCases {
    addItemToList: AddItemToList
}

export class Controller {

    constructor(private readonly _useCases: UseCases) {
    }

    executeAddItemToList(itemTitle: string) {
        const item = new Item(uuidv4, itemTitle)
        return this._useCases.addItemToList.execute({item})
    }

}