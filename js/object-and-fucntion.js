let car = {
    name: "Fiat",
    model: 550,
    weight: '850kg',
    color: "White",
    start: function(){
       this.drive(7+3);
        console.log("car has started");
        return this.color+" "+this.weight;
    },
    drive: function(num){
        console.log("car is driving: "+num);
    }
};

console.log(car.name);
console.log(car['name'],car['color'],car['weight'],car['model']);
let valu = car.start();
console.log(valu);
// console.log(car.drive());

// let x = 5; //literal syntax 
// let y = new Number(5); // ay vabeo lekha jai but ata object representaion akre dey

// console.log(typeof x);
// console.log(typeof y);

const obj = {
    a: 'lws',
    b: undefined,
    c: "learn with sumit",
    d: false,
    e: "",
    f: "apple",
    g: '40',
    h: "k",
    i: "true",
    j: "Thanks all",
    k: NaN
};

const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObject(obj));