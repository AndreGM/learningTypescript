let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothin: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let myBooleans: boolean[] = [true, false, true];

//classes
class Car {

}
let car: Car = new Car();

//object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When to use annotations

//1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{ x: 10, y: 20 }

//2) when i declare a variable on one line
// initializate later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <  words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}


//3) Variable whose type cannot inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for( let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}