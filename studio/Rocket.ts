import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
  //properties and methods
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[];
  astronauts: Astronaut[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    this.cargoItems = [];
    this.astronauts = [];
  }

  //Method a.
  //if (items.includes(this.massKg))
  sumMass(items: Payload[]): number {
    let sum: number = 0;
    items.forEach(function (item) {
      sum = sum + item.massKg;
    });
    return sum;
  }

  //Method b.
  currentMassKg(): any {
    let currentMass: number = 0;
    return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
  }

  //method c.
  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  //Method d.
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
      //add astronaut to this.astronauts & returns true
    } else {
      return false;
    }
  }

  //Method e.
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      //uses if true to see another astronaut can be added
      return true;
    } else {
      return false;
    }
  }
}
