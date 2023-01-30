{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) throw new Error("doesn't exist");

      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const test = new StackImpl<string>();
  test.push("string1");
  test.push("test2");
  while (test.size !== 0) {
    console.log(test.pop());
  }

  const test2 = new StackImpl<number | string>();
  test2.push(123);
  test2.push("test2");
  while (test2.size !== 0) {
    console.log(test2.pop());
  }
}
