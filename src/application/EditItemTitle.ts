import { AbstractUseCase } from './AbstractUseCase.ts';

export class EditItemTitle extends AbstractUseCase {
  execute(input: void | undefined): Promise<void> | void {
    return undefined;
  }
}
