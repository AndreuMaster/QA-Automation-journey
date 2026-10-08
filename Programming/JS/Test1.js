//Test just to verify basic typescript learning

let cars = ["Ford", "Mercedes", "Porsche", "Audi", "BMW"];
let prices = [20000, 45000, 85000, 35000, 60000];
let stock = [3, 0, 2, 5, 1];
let availableCars = 0;
let budget = 50000;

for(let index = 0; index<cars.length; index++){
    console.log(cars[index] + " costs " + prices[index] + " and we have " + stock[index] + " in stock.");

    if(stock[index] === 0){
        console.log(cars[index] + " is out of stock.")
    }
    else{
        console.log(cars[index] + " is available" );
    }

    if(budget >= prices[index])
        console.log("The car is affordable");
    
    let carPrice = prices.at(index);
    if(carPrice <= 30000){
        console.log("Cheap car");
    } else if(carPrice <= 60000){
        console.log("Medium price car");
    }
    else{
        console.log("Expensive car");
    }
    
    if(stock.at(index) > 0)
        availableCars++;


}

console.log("There are " + availableCars + " different cars available");