interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string{
    return `Name: ${this.name}`;
  }
};

// const printVehicle = ({name, year, broken}: {name: string; year:number; broken: boolean}): void =>{
//   console.log(`Name: ${name}`);
//   console.log(`year: ${year}`);
//   console.log(`broken: ${broken}`);
// }

// const printVehicle = ({name, year, broken}: Vehicle): void =>{
//   console.log(`Name: ${name}`);
//   console.log(`year: ${year}`);
//   console.log(`broken: ${broken}`);
// }


const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `Name: ${this.name}`;
  }
}
const printSummary = ({summary}: Reportable): void =>{
  console.log(summary());
}

printSummary(oldCivic);
printSummary(drinks);