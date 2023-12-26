let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj.employees[0].firstName);


let person = {
    firstName: "Sumit",
    lastName: "Saha"
}

console.log(JSON.stringify(person));