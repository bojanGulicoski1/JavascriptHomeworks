//homework 5 
const numbers = [3, 5, 6, 8, 11];

function calculateMax(numberArray) {
  let counter = 0;
  let max = numberArray[0];

  while (counter < numberArray.length) {
    let currentNumber = numberArray[counter];
    if (currentNumber > max) {
      max = currentNumber
    }
    counter++
  }
  return max;
}
let maxNumber = calculateMax(numbers);
console.log(maxNumber);

function calculateMin(numberArray) {
  let counter = 0;
  let min = numberArray[0];

  while (counter < numberArray.length) {
    let currentNumber = numberArray[counter];
    if (currentNumber < min) {
      min = currentNumber
    }
    counter++
  }
  return min;
}
let minNumber = calculateMin(numbers);
console.log(minNumber);

let totalSum = maxNumber + minNumber;
console.log(totalSum);