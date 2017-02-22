function sortMax(a, b) {
  return b - a;
}


function largestOfFour(arr) {
  var result = [];
  for(let i = 0; i < arr.length; i++) {
      result.push(arr[i].sort(sortMax).shift());
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);