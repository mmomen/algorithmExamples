/*
Given a sorted array, [1,2,3,4,5,6,7,8,9,10], write an algorithm that can search the array for any number.
It will return the index of the number if it is found or -1 if not.
Take into account the speed and amount of memory of your algorithm!
*/

var search = function(arr, target) {
  var min = 0,
      max = arr.length - 1,
      i = 0,
      guess = 0;

  while (max >= min) {
    console.log('step: ' + ++i);
    guess = Math.floor((max + min) / 2);
    if (arr[guess] === target) {
      return guess;
    } else if (target > arr[guess]) {
      min = guess + 1;
    } else if (target < arr[guess]) {
      max = guess;
    }
  }

  return -1;
};

var array = [-8,-7,-5,-3,1,2,3,4,5,6,7,8,9,10,100,102,300];

var index = search(array, 2);
console.log(index);