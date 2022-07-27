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
    private _size: number;
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

      return node.value;
    }
  }
}
