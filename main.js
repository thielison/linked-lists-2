import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(list.headNode());
// console.log(list.tailNode());
// console.log(list.size());
// console.log(list.at(5));
// console.log(list.pop());
// console.log(list.contains("turtle"));
// console.log(list.find("parrot"));

console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.toString());
console.log(list.removeAt(2));
console.log(list.toString());
