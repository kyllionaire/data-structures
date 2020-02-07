var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  //assign storage in someInstance
  someInstance.storage = {};
  //use extend (to, from)
  _.extend(someInstance, stackMethods);
  //return obj
  return someInstance;
};

var stackMethods = {};
//create a count variable
var count = 0;
//push,pop,size functions
//method to add to stack
stackMethods.push = function(value) {
  //set key val pairs in this.storage obj
  this.storage[count] = value;
  //increment this.count variable
  count++;
};

//method to delete from stack
stackMethods.pop = function() {
  //check if stack is empty
  if (count < 1) {
    return 0;
    //else greater than or equal to 1
  } else {
    //decrement count
    count--;
    var popped = this.storage[count];
    delete this.storage[count];
    return popped;
  }
};

//method to track size of storage
stackMethods.size = function() {
  return Object.keys(this.storage).length;
  // return count;
};
