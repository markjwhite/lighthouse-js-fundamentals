function range(start, end, step) {
  const numbers = [];
  const empty = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return empty;
  } else {
    for (let num = start; num <= end; num += step) {
      numbers.push(num);
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(undefined, 2, 3));