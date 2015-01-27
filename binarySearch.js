/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess = max / 2;

    while (max >= min) {
      if (array[guess] === targetValue) {
          return guess;
      } else if (targetValue > array[guess]) {
          min = guess + 1;
          guess = Math.floor((max+min)/2);
      } else if (targetValue < array[guess]) {
          max = guess;
          guess = Math.floor((max+min)/2);
      }
      console.log('max: ' + max);
      console.log('min: ' + min);
    }

  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);