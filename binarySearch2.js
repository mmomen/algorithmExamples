var binarySearch = function(arr, target) {
  var m;
  var s = 0;
  var e = arr.length - 1;
  var kill = 0;
  while (e > s) {
    kill++;
    if (kill > 9) {
      return 'wtf';
    }
    m = Math.floor((e + s) / 2);
    console.log(s, m, arr[m], e);
    if (target < arr[m]) {
      e = m;
    } else if (target > arr[m]) {
      s = m + 1;
    } else if (target === arr[m]) {
      return m;
    }
  }

  return false;
};

var x = binarySearch([1,3,4,7,8,9,10,11,20,34,55], 55);
console.log(x);


/*
  find middle of array
  compare target against middle
    if less (target is less than middle, search down)
      middle = end
    else (target is more than middle, search up)
      middle = start
*/