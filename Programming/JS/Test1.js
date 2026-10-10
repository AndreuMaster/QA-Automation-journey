//Test just to verify basic typescript learning

const cars = [
    {
        brand: "Ford",
        price: "20000",
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
const totalCarsInStock = cars.reduce(
    (total, car) => total + car.stock, 0);

for (const carData of cars) {
    console.log(`${carData.brand} costs ${carData.price} and we have ${carData.stock} in stock.`);

    if (isCarAvailable(carData)) {
        console.log(`${carData.brand} is available.`);
    }
    else {
        console.log(`${carData.brand} is out of stock.`);

    }

    try {
        priceRangeClassification(carData.price);
    } catch (error) {
        console.error(`Could not classify ${carData.brand}:`, error.message);
    }

    if (isCarOnBudget(carData, budget)) {
        console.log(`${carData.brand} is affordable`);
    }
    else {
        console.log(`${carData.brand} is not affordable.`);
    }
}

const firstAffordableCar = firstAffordableCarInStock();


if (firstAffordableCar !== null) {
    console.log(`First affordable car: ${firstAffordableCar.brand}`);
} else {
    console.log("No affordable cars found.");
}

console.log(`${cars.length} different car models available.`);
console.log(`There are ${totalCarsInStock} cars available`);

const totalCarsSold = sellStock(totalCarsInStock);

//#Fuctions 
function isCarOnBudget(carData, budget) {
    return carData.price <= budget;
}

function isCarAvailable(carData) {
    if (typeof carData !== "object" || carData === null) {
        throw new TypeError("carData expects a number");
    }

    return carData.stock > 0;
}

function priceRangeClassification(priceAmount) {
    if (typeof priceAmount !== "number") {
        throw new TypeError("priceAmount expects a number");
    }
    
    switch (true) {
        case priceAmount < 30000:
            console.log("Cheap car");
            break;
        case priceAmount <= 60000:
            console.log("Medium price car");
            break;
        case priceAmount > 60000:
            console.log("Expensive car");
            break;
        default:
            console.log("Not defined");
    }
}

function sellStock(stock) {
    let totalCarsSold = 0;
    while (stock > 5) {
        totalCarsSold++;
        stock--;
        console.log(`Remaining cars ${stock}`);
    }
    console.log(`${totalCarsSold} cars have been sold.`);
    return totalCarsSold;
}

function firstAffordableCarInStock() {
    let index = 0;
    let firstAffordableCar = null;
    do {
        const car = cars[index];
        if (car.price <= budget) {
            firstAffordableCar = car;
        }
        else {
            index++;
        }
    }
    while (firstAffordableCar === null && index < cars.length);
    return firstAffordableCar;
}