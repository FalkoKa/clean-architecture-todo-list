import {Item} from "../../domains/Item.ts";

export const createInitialViewModel = () => {
    return {
        global: {
            isLoading: true
        }
    }
}

export type ViewModel = {
    global: {
        isLoading: boolean
    }
    list?: Array<Item>
}