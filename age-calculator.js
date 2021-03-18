function ageCalculator(name, yearOfBirth, currentYear) {
  let age = 0;
  age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`
}