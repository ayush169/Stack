//in place reversing of stack

class Stack {
  constructor() {
    this.stack = [];
  }

  push(num) {
    return this.stack.push(num);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return "stack underflow";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "stack underflow";
    }
    return this.stack[this.stack.length - 1];
  }

  display() {
    if (this.isEmpty()) {
      console.log("stack underflow");
    }
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }

  clear() {
    this.stack = [];
  }
}

let arr = [];
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log("originally:-");
myStack.display();

while (!myStack.isEmpty()) {
  arr.push(myStack.pop());
}

console.log(arr);
myStack.display();

for (let i = 0; i < arr.length; i++) {
  myStack.push(arr[i]);
}

console.log("after reversing:-");
myStack.display();
