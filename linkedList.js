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

  //Head first node

  //Tail last node

  //At(index)

  //Pop removes last element

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

  //RemoveAt(index)
}

const ll = new LinkedList();

ll.prepend(200);
ll.prepend(300);
ll.prepend(400);
ll.append(800);
ll.append(900);

ll.toString();
