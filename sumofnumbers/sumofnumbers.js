const test = [1, 3, 5, 7];

function sumFor(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

console.log(sumFor(test));

function sumWhile(numArray) {
  let sum = 0;
  let i = 0;
  while (i < numArraylength) {
    total += numArray[i];
    i++;
  }
  return total;
}

console.log(sumFor(test));

function sumRecursion(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  return numArray[0] + sumRecursion(numArray.slice(1, numArray.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(numArray) {
  return _.reduce(numArray, function(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));