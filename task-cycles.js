// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
const arrayOfMultiples = (num, length) => {
  // ... write code ...
  let multiples = [];
  for (let i = 0; i < length; i = i + 1) {
    multiples.push(num * (i + 1));
  }
  return multiples;
};

// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
const changeDirection = (array) => {
  // ... write code ...

  //return array.reverse();

  for (let i = 0; i < array.length / 2; i = i + 1) {
    let tmp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmp;
  }
  return array;
};

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
const biggerArray = (array1, array2) => {
  // ... write code ...
  let sum1 = array1.reduce((a, b) => a + b, 0);
  let sum2 = array2.reduce((a, b) => a + b, 0);
  if (sum1 > sum2) {
    return { array: array1, sum: sum1 };
  } else {
    return { array: array2, sum: sum2 };
  }
};
