function discount(disc) {
    return (price) => {
        return price - price * disc;
    };
}

let tenPercentDiscount = discount(0.1); //partial function
let twuntyPercentDiscount = discount(0.2); //partial function
let customer1D = tenPercentDiscount(600);
let customer2D = tenPercentDiscount(700);
let customer3D = tenPercentDiscount(800);
let customer4D = twuntyPercentDiscount(1200);

console.log(customer2D);