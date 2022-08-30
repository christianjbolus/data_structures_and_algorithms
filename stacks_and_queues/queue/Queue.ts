// Generic Queue class of type 'any'
class Item<T> {
  val: T | null = null;
  next: Item<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

class Queue<T> {
  private first: Item<T> | null = null
  private last: Item<T> | null = null
  private size: number = 0;

  enqueue(val: T): number {
    const newItem = new Item(val);
    if(this.first === null) {
      this.first = newItem;
      this.last = newItem;

    } else {
      this.last!.next = newItem
      this.last = newItem;
    }

    return ++this.size;
  }

  dequeue(): Item<T> | undefined {
    if(this.first === null) return undefined;
    const itemToRemove = this.first;
    this.first = this.first.next;
    itemToRemove.next = null;
    this.size--;
    if(this.size === 0) this.last = null;
    return itemToRemove;
  }

  read(): Item<T> | null {
    return this.first;
  }
}

const queue = new Queue<number>()
queue.enqueue(7)
