var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);

    if (this.tail !== null) {
      this.tail.next = currentNode;
    }
    if (this.head === null) {
      this.head = currentNode;
    }
    this.tail = currentNode;
  };

  list.removeHead = function() {
    var oldHeadVal = this.head.value;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return oldHeadVal;
  };

  list.contains = function(target, node) {
    node = node || this.head;
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    }
    return this.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //linear
 */
