import { linkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new linkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }
}

export { Stack };
