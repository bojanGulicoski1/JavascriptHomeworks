
let year = prompt("What is your year of birth");

let yearBorn = (Number(year));

let result = (yearBorn - 4) % 12;


if ( result === 0){
    console.log("Rat")
} else if (result === 1){
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
}
if (isNaN (yearBorn)){
    console.log("Please write a number");
}



