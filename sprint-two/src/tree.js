var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me
  //use extend to share methods
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//create tree and add it
treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  //check if value is target - base case
  if (this.value === target) {
    return true;
  }
  //iterate over children array
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    //recursively check each child [array of [arrays]]
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
