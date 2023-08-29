class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items = [...this.items, element];
      return element;
    }

    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      } else {
        throw new Error("peek from empty stack");
      }
    }

    isEmpty() {
      return this.items.length == 0;
    }

    clear() {
      this.items = [];
    }
  
    search(item) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] == item) {
          return i;
        }
      }
      return -1;
    }

    getMax() {
      let max = this.items[0];
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i] > max) max = this.items[i];
      }
      return max;
    }

    getMin() {
      let min = this.items[0];
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i] < min) min = this.items[i];
      }
      return min;
    }
  }
  
let stack = new Stack();
console.log(stack.items);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(0);

console.log('Array = ', stack.items);
console.log('Max = ', stack.getMax());
console.log('Min = ', stack.getMin());