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
        sum = this.massKg + sum;
      }
      return sum;
    });
  }
}
