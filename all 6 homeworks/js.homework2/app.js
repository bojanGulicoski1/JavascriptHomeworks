//homework2
function validateNumber(number) {
    if (isNaN(number)) {
      return false;
    } else {
      return true;
    }
  }
  function sumOfFiveNumbers(numberArray) {
    let sum = 0;
    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = numberArray[i];
      let cheechNumber = validateNumber(currentNumber);
      if (cheechNumber === true) {
        sum += currentNumber
      }
      else {
        return ("Eror invalid number");
      }
    }
    return sum;
  
  }
  let sum = sumOfFiveNumbers([10, 20, 50, 100, 300]);
  console.log(sum);
  