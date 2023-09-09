import { AbstractUseCase } from './AbstractUseCase.ts';

export class SeeList extends AbstractUseCase {
  execute(input: void | undefined): Promise<void> | void {
    return undefined;
  }
}
