//Node class with value property
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

    //If the list is empty
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      //Traverse to the end of the list
      while (current.next) {
        current = current.next;
      }
      //Link the new node at the end
      current.next = node;
    }
    //Increase the size of the list
    this.size++;
  }

  //Prepend(value) to the start of the list
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  //Size total number of nodes in the list
  getSize() {
    console.log(this.size);
  }

  //Head first node
  getHead() {
    if (this.head) {
      console.log(this.head.value);
    } else {
      console.log("The list is empty");
    }
  }

  //Tail last node
  getTail() {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log(current.value);
  }

  //At(index)
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Pop removes last element
  popLast() {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    }

    if (this.head.next === null) {
      //If there is only one node
      this.head = null;
    } else {
      let current = this.head;

      //Traverse to the second-to-last node
      while (current.next.next) {
        current = current.next;
      }

      //Remove the last node
      current.next = null;
    }

    // Decrease the size of the list
    this.size--;
  }

  //Contains(value) returns true if the passed in value is in the list

  //Find(value) returns the index of the node containing value or null

  //ToString LinkedList objects as strings - format: (value) -> (value) -> (value) -> null
  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `(${current.value}) -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
    return result;
  }
  //InsertAt(value, index)
  insertAt(value, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //If index is first
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const node = new Node(value);
    let current;
    let previous;
    //Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //RemoveAt(index)
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }
  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();

ll.prepend(200);
ll.prepend(300);
ll.prepend(400);
ll.append(800);
ll.insertAt(700, 4);

//ll.at(1);
//ll.removeAt(0);
//ll.clearList();
//ll.popLast();

ll.toString();

//ll.getTail();
//ll.getSize();
