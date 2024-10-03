
interface User {
    name: string;
    age: number;
    occupation: string;
}


interface Admin {
    name: string;
    age: number;
    role: string;
}
type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) { //log ფუნქციით პერსონ აღიქმება როგორც პარამეტრი და in განგვისაზღვრავს occupation არის თუ არა person-ში
 
    if ('occupation' in person) {
        console.log(`User - Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`);
    } else {
        console.log(`Admin - Name: ${person.name}, Age: ${person.age}, Role: ${person.role}`);
    }
}

persons.forEach(logPerson);