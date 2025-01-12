class MyOwnArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    this.shiftItems(0);
    return firstItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const myArray = new MyOwnArray();
myArray.push("hi");
myArray.push("hi1");
myArray.push("hi2");
// console.log(myArray.delete(2));
console.log(myArray);
