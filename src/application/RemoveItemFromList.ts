import { AbstractUseCase } from './AbstractUseCase.ts';

export class RemoveItemFromList extends AbstractUseCase {
  execute(input: void | undefined): Promise<void> | void {
    return undefined;
  }
}
