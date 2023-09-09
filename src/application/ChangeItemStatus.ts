import { AbstractUseCase } from './AbstractUseCase.ts';

export class ChangeItemStatus extends AbstractUseCase {
  execute(input: void | undefined): Promise<void> | void {
    return undefined;
  }
}
