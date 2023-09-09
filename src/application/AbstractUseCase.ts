type Primitive = string | boolean | number;

export abstract class AbstractUseCase<
  InputType extends Record<string, unknown> | Primitive | void = void,
  OutputType = void
> {
  public abstract execute(input?: InputType): OutputType | Promise<OutputType>;
}
