/*let year = prompt("What is your year of birth");

let yearBorn = Number(year);

let result = (yearBorn - 4) % 12 ;

if (isNaN (yearBorn)){
	console.log("Please write a number");
}else if (result===0){
	console.log("Rat")
}else if (result === 1){
	console.log("Ox")
} else if (result === 2){
	console.log("Tiger")
} else if (result === 3){
	console.log("Rabbit")
} else if (result === 4){
	console.log("Dragon")
} else if (result === 5){
	console.log("Snake")
} else if (result === 6){
	console.log("Horse")
} else if (result === 7){
	console.log("Goat")
} else if (result === 8){
	console.log("Monkey")
} else if (result === 9){
	console.log("Rooster")
} else if (result === 10){
	console.log("Dog")
} else if (result === 11){
	console.log("Pig")
}*/

/*let numberOne = 15;
let numberTwo = 30;

function multiply(number1 , number2) {
	//console.log(number1 , number2)

	return number1 * number2;
}

function sobiranje(number1,number2){
	return number1 + number2;

}


let total = multiply(numberOne , numberTwo);
let total1 = sobiranje(numberOne , numberTwo);

let totalAge = multiply(prompt("enter your number"), total1);
console.log(totalAge);*/

/*function myNumber (num1 , num2){
   
	return num1 + num2
}
let result = myNumber(5,7);
console.log(typeof result);

function myName (firstName , lastName){
	return firstName + lastName
}
let myFullNAme =myName("Bojan" , "Gulicoski")
console.log(typeof myFullNAme);

function bulean(car1 , car2 ,car3){
	return car1+car2 + car3
}
let cars =bulean("Honda", "Fiat","audi")
console.log(cars);*/

function humanInDogCalculator(myAge) {
	let total = myAge / 7;
	return total;
}

function dogsAgeInHumanAge(dogAge) {
	let total = dogAge * 7;
	return total;
}

let humanYearsPrompt = prompt("What is your human years");
let humanYearsNumber = Number(humanYearsPrompt);
if (isNaN(humanYearsNumber)) {
	alert("Enter a number")

} else {
	let result = humanInDogCalculator(humanYearsNumber);
	alert(`I'am ${humanYearsNumber} years old and my age in dog's age is equal to ${result}`);
}





/*
let humanYears = 99;
let result= humanInDogCalculator(humanYears);
console.log(`I'am ${humanYears} years old and my age in dog's age is equal to ${result}`);



let dogAge =4;
let result2=dogsAgeInHumanAge(dogAge);
console.log(`My dog is ${dogAge} years old and in human age that is equal to ${result2}`);*/

