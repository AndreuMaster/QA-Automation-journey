//Test just to verify basic typescript learning

const cars = [
    {
        brand: "Ford",
        price: 20000,
        stock: 3
    },
    {
        brand: "Mercedes",
        price: 45000,
        stock: 0
    }, 
    {
        brand: "Porsche",
        price: 85000,
        stock: 2
    },
    {
        brand: "Audi",
        price: 35000,
        stock: 5
    }, 
    {
        brand: "BMW",
        price: 60000,
        stock: 1
    }];

const budget = 50000;
let totalCarInStock = 0;

for(const carData of cars){
    console.log(`${carData.brand} costs ${carData.price} and we have ${carData.stock} in stock.`);

    if (isCarAvailable(carData)) {
        console.log(`${carData.brand} is available.`);
    }
    else {
        console.log(`${carData.brand} is out of stock.`);
        
    }

    priceRangeClassification(carData.price);

    if (isCarOnBudget(carData, budget)) {
        console.log(`${carData.brand} is affordable`);
    }
    else {
        console.log(`${carData.brand} is not affordable.`);
    }

    totalCarInStock += carData.stock;
}

console.log(`${cars.length} different car models available.`);
console.log(`There are ${totalCarInStock} cars available`);
totalCarInStock = 0;

//#Fuctions 
function isCarOnBudget(carData, budget) {
        return carData.price <= budget;
}

function isCarAvailable(carData) {
    return carData.stock > 0;
}

function priceRangeClassification(price) {
    switch (true) {
        case price < 30000:
            console.log("Cheap car");
            break;
        case price <= 60000:
            console.log("Medium price car");
            break;
        case price > 60000:
            console.log("Expensive car");
            break;
    }
}
