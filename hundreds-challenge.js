function howManyHundreds(number) {
  const x = number % 100;
  if (x !== 0) {
    return (number / 100) - x / 100
  } else {
    return number / 100;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));

