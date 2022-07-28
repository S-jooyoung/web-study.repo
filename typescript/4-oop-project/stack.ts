{
  type StackNode = {
    value: string;
    next?: StackNode;
  };

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  class Stackimpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size(): number {
      return this._size;
    }

    push(value: string) {
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is Empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new Stackimpl();

  stack.push("JOO 1");
  stack.push("YOUNG 2");
  stack.push("SHIN 3");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
