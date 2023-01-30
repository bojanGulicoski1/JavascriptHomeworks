const firstName1 = ["Bob", "Jill"];
const lastName1 = ["Gregory", "Wurtz"];

function FirstLastNames(firstName, lastName) {
  let number = 1;
  let fullName = [];
  for (let i = 0; i < firstName.length; i++) {
    fullName.push(`${number+1}. ${firstName[i]} ${lastName[i]}`);
    
  }
  return fullName;
}
console.log(FirstLastNames(firstName1, lastName1));