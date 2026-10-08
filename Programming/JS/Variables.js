let age = "18";
let personName = "Andreu";
let gender = 'm';
let income = 100.2;
let cars = ["Ford", "Mercedes", "Porsche", "Audi"];
let practicingAutomationQA = true;
let isSingle = false;

console.log(personName + " with " + age + " and genre: " + gender + ". Owns a " + cars.at(2) + " since his income is: "+ income);

console.log(age === 18); //It verifies not only the value it also verifies the type
console.log(age == 18); //It verifies the value. In this case it parses the string to int


console.log(false | 4); //It is comparing the bits returning a value of 1 or 2 with an OR output
console.log(practicingAutomationQA||isSingle); //Logical OR

console.log(3+2);
console.log(3-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
