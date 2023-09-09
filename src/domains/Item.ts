export interface IdGenerator {
  (): string;
}

export class Item {
  private readonly _id: string;
  private _title: string;
  private _completed = false;

  constructor(generateId: IdGenerator, title: string) {
    this._title = title;
    this._id = generateId();
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get status() {
    return this._completed;
  }

  get props() {
    return {
      id: this._id,
      title: this._title,
      completed: this._completed,
    };
  }

  editTitle(title: string) {
    this._title = title;
  }

  changeStatus() {
    this._completed = !this._completed;
  }
}
