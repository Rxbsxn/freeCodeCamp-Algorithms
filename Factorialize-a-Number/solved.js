function factorialize(num) {
  var sum = 1;
  for (let i = 2; i <= num; i++) {
    sum = sum * i;
  }

  return sum;
}

factorialize(5);
