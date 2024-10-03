//1)
const integer: number = 10;
const float: number = 40.5;
const hex: number = 0x1A3F;
const binary: number = 0b1101011010;
const octal: number = 0o537;
const singleQuoteString: string = 'Hello, TypeScript!';
const notANumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const infiniteValue: number = Infinity;
const userName: string = 'Alice';
const greetingMessage: string = `Welcome, ${userName}!`;
const isUserLoggedIn: boolean = true;
const hasPermission: boolean = false;
//2)
let str_num: string = "111";
let num: number = parseInt(str_num); 

let numberValue: number = 111;
let str: string = numberValue.toString(); 
//3)
let userInput: any;
userInput = 30;
userInput = "John";
userInput = [1, 2, 3];
userInput = true;
userInput = { name: "John", age: 30 };
//4)
let userInput: unknown;

userInput = 30;
userInput = "John";
userInput = [1, 2, 3];
userInput = true;
userInput = { name: "John", age: 30 };


if (typeof userInput === "number") {
  userInput++;
}
if (typeof userInput === "string") {
  console.log(`Input: ${userInput.toUpperCase()}`);
}


if (Array.isArray(userInput)) {
  userInput.forEach((el) => {
    console.log(el);
  });
}


console.log(`Boolean value: ${Boolean(userInput)}`);


if (typeof userInput === "object" && userInput !== null && "name" in userInput && "age" in userInput) {
  console.log(`User name: ${(userInput as { name: string }).name}, Age: ${(userInput as { age: number }).age}`);
}
//5)
const Animals: string[] = ['Dog', 'Cat', 'Elephant', 'Giraffe', 'Lion', 'Rabbit'];
const Scores: number[] = [97, 69, 92, 88, 100, 83];
const StringsAndNumbers: (string | number)[] = [1, 'One', 2, 'Two', 3, 'Three'];

const Matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const AllArrays: (string[] | number[] | (string | number)[])[] = [Animals, StringsAndNumbers, Scores];

Animals.forEach((animal: string, index: number) => {
    console.log(`${index}: ${animal}`); // Log the index and name of each animal
});
//6)
function processInput(userInput: number | string): void {
  if (typeof userInput === "number") {
      // Check if the number is even or odd
      if (userInput % 2 === 0) {
          console.log(`The number ${userInput} is even.`);
      } else {
          console.log(`The number ${userInput} is odd.`);
      }
  } else if (typeof userInput === "string") {
      // Output the length of the string
      console.log(`The length of the string "${userInput}" is ${userInput.length}.`);
  } else {
      console.log("Unknown input type.");
  }
}


processInput(42);        
processInput(35);       
processInput("hello");   
//7)
function sumArray(numbers: number[]): number {
  let sum = 0; 

 
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
  }

  return sum;
}