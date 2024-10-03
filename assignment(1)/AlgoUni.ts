class Person {
    firstName: string;
    lastName: string;
    age: number;
    school: string;

    constructor(firstName: string, lastName: string, age: number, school: string = "AlgoUni") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.school = school;
    }

    displayInfo(): void {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`School: ${this.school}`);
    }
}
const person1 = new Person("Nika", "Giorgadze", 19); //ალგო უნის მაგალითი
const person2 = new Person("Pavle", "Mgeladze", 30, "Tech University"); // 

person1.displayInfo();
person2.displayInfo();