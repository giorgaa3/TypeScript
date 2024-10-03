interface User {
    name: string;         
    age: number;           
    job: string;    
}
function printUserDetails(users: User[]): void {
    users.forEach(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}, Occupation: ${user.job}`);
    });
}
const usersList: User[] = [
    { name: "Nika", age: 19, job: "Engineer" },
    { name: "Luka", age: 20, job: "Designer" },
    { name: "Albert", age: 21, job: "Teacher" }
];
printUserDetails(usersList);