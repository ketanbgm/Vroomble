class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    var curr = this.head;
    var str = "The list is : ";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  createList(array) {
    let prev;
    array.forEach((element, index) => {
      let node = new Node(element);
      if (index == 0) {
        this.head = node;
      } else {
        prev.next = node;
      }
      prev = node;
    });
  }
  removeNthLast(n) {
    if (n < 1) {
      console.log("Can not delete the node with number less than 1.");
      return;
    }
    let slow = this.head,
      fast = this.head;
    for (let i = 0; i < n; i++) {
      if (fast == null) {
        console.log("N is greater than the size of list");
        return;
      }
      fast = fast.next;
    }
    if (fast == null) {
      console.log(`Removed ${this.head.element} from position ${n}.`);
      this.head = slow.next;
      return;
    }
    while (fast && fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }
    console.log(`Removed ${slow.next.element} from position ${n}.`);
    slow.next = slow.next.next;
  }
}

let l1 = new linkedList();
l1.createList([10, 20, 30, 40]); //Change the array elements to create Linked List.
l1.printList();
l1.removeNthLast(2); //Please change this number to delete the node.
l1.printList();
