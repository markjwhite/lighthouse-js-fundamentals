function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return length * width
  } else {
    return undefined
  }
}

function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2
  } else {
    return undefined
  }
}

function calculateCircleArea(radius) {
  if (radius > 0) {
    return Math.PI * Math.pow(radius, 2);
  } else {
    return undefined
  }
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined