class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}
const person1 = new Person('Sakib', 53);
const person2 =  new Person("Tamim", 36);

person1.play();
person2.play();