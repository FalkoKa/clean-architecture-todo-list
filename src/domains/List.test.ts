import { IdGenerator, Item } from './Item.ts';
import { uuid } from 'uuidv4';
import { List } from './List.ts';

describe('List', () => {
  const generateId: IdGenerator = () => uuid();

  const item1 = new Item(generateId, 'do homework');
  const item2 = new Item(generateId, 'do homework');

  it('can be created without items', () => {
    const list = new List();

    expect(list).toBeDefined();
  });

  it('can add an item', () => {
    const list = new List();
    list.addItem(item1);

    expect(list.items).toHaveLength(1);
    expect(list.items[0]).toEqual(item1);
  });

  it('can remove an item', () => {
    const list = new List();
    list.addItem(item1);
    const id = item1.id;

    list.removeItemById(id);

    expect(list.isEmpty()).toBe(true);
  });

  it('can remove an item from two items', () => {
    const list = new List();
    list.addItem(item1);
    list.addItem(item2);
    const id = item1.id;

    list.removeItemById(id);

    expect(list.items).toHaveLength(1);
    expect(list.items[0]).toEqual(item2);
  });

  it('removing an items that is not present leaves list untouched', () => {
    const list = new List();
    list.addItem(item1);
    list.addItem(item2);

    list.removeItemById('12345');

    expect(list.items).toHaveLength(2);
    expect(list.items[0]).toBe(item1);
    expect(list.items[1]).toBe(item2);
  });
});
