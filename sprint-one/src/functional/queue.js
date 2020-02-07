var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  //create a func to find the smallest num
  var smallest = function() {
    var small = count;
    for (var key in storage) {
      if (key < small) {
        small = key;
      }
    }
    return small;
  };

  // Implement the methods below
  someInstance.enqueue = function(value) {
    //set key to equal value
    storage[count] = value;
    //increment counter
    count++;
  };

  someInstance.dequeue = function() {
    var deqe = storage[smallest()];
    delete storage[smallest()];
    return deqe;
  };

  someInstance.size = function() {
    // return count;
    var sized = 0;
    for (var key in storage) {
      sized++;
    }
    return sized;
    // return Object.keys(storage).length;
  };

  return someInstance;
};

//previous iterations
// //remove front of line
// delete storage[0];
// //decrement count
// count--;
// //create res variable
// var result = storage[count];
// //change keys to updated queue
// //loop through storage
// for (var key in storage) {
//   var toNum = parseInt(key);
//   toNum--;
//   storage[toNum] = storage[key];
//   delete storage[key];
// }
// return result;
