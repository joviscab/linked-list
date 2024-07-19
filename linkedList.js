//Node class with value property, link to nextNode both as null by default
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//LinkedList class for the full list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Append(value) to the end of the list
  append(value) {
    let node = new Node(value);
    let current;
  }

  //Prepend(value) to the start of the list
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  //Size total numberof nodes in the list

  //Head first node

  //Tail last node

  //At(index)

  //Pop removes last element

  //Contains(value) returns true if the passed in value is in the list

  //Find(value) returns the index of the node containing value or null

  //ToString LinkedList objects as strings - format: (value) -> (value) -> (value) -> null

  //InsertAt(value, index)

  //RemoveAt(index)
}
