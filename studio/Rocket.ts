import { Payload } from "./Payload";

export class Rocket {
  //properties and methods
  name: string;
  totalCapacityKg: number;
  cargoItems: object[];
  astronauts: object[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let sum: number = 0;
    items.forEach(function (item) {
      if (items.includes(this.massKg)) {
        sum = sum + this.massKg;
      }
      return sum;
    });
  }

  currentMassKg(): number {
    let currentMass: number = 0;
    this.astronauts.forEach(function (weight) {
      if (this.astronauts.includes(this.massKg)) {
        currentMass = currentMass + this.massKg;
      }
      return (currentMass = currentMass + this.sumMass);
    });
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    }
  }
}
