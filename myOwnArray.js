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
}

const myArray = new MyOwnArray();
myArray.push("hi");
myArray.push("hiiiii");
console.log(myArray.get(1));
