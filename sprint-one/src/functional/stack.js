var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //keys are numbered sequentially
    //values are value inputted
    //set key val pairs in storage obj
    storage[count] = value;
    //increment count variable
    count++;
  };

  someInstance.pop = function() {
    //check if stack is empty
    if (count === 0) {
      return 0;
    } else {
      //change count - 1
      count--;
      var popped = storage[count];
      delete popped;
      return popped;
    }
  };

  someInstance.size = function() {
    // var storageLength = Object.keys(storage).length;
    // return storageLength;
    //or just return count 0, if empty
    return count;
  };

  return someInstance;
};
