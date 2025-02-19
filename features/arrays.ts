const carMakers1: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake1: string[][] = [];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with inference when extracting values
const carp = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with map
carMakers.map((car:string):string=>{
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2030-10-10');