{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
  };

  class Stackimpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error("Stack is Full!");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is Empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new Stackimpl<string>(3);
  stack.push("JOO 1");
  stack.push("YOUNG 2");
  stack.push("SHIN 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new Stackimpl<number>(3);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
