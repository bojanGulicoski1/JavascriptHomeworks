let price = 119.99;
let numPhones = 30;
let commission = 20;

console.log ("Price per phone", +  price)

//calculating commission on one phone
let totalCommission = (commission / 100) * 119.99;
console.log ("Commission per phone", + totalCommission);

//calculating all phones price
let allPhonePrice = (price * numPhones);
console.log("Price for 30 phones", + allPhonePrice);

//calculating all phones commission
let allPhonesCommission = (numPhones * totalCommission);
console.log("Commission for 30 phones", + allPhonesCommission);

//calculating price with commission for all phones
let allPhonesComissionPrice = (price * numPhones + numPhones * totalCommission);
console.log("Price for all phones", +allPhonesComissionPrice);