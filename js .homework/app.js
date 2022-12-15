//Homework 1
//Return typeof
function parameterItems (parameter){
    let typeOfParameter = typeof parameter;
    return typeOfParameter;
}

let result1 = parameterItems("Hello");
console.log(result1);

let result2 = parameterItems(100);
console.log(result2);

let result3 = parameterItems(true);
console.log(result3);

let result4 = parameterItems(null);
console.log(result4);

let result5 = parameterItems(undefined);
console.log(result5);

//Homework 2
//Converting dog's age in human years

function dogInHumansAge(){
    let dog = 4;
    let dogYears = 7 * dog;
    return dogYears;
}
let total = dogInHumansAge()
console.log(`My 4 years old dog is ${total} in human years.`);
//Converting my age in dog's years

function myAgeInDogs(){
    let myAge = 28;
    let myAgeInDog = myAge / 7;
    return myAgeInDog
}
let myAgeInDogsAge = myAgeInDogs();
console.log(`I'am 28 years old, that is equal to ${myAgeInDogsAge} in dog years.`);


//Homework number 3 
//ATM

let balance = 1000;
function atm(cash){
    
    let enteredCash =prompt( Number(cash));
    if (isNaN(enteredCash)){
        alert("Please enter a number")
    }
    else if (enteredCash > balance){
        alert("Not enought money")
    }else if(enteredCash < balance) {
        balance = balance - enteredCash
        alert(`You withdrawn ${enteredCash}$ and you left ${balance}$ on your account`)
    }
   
}

atm();
