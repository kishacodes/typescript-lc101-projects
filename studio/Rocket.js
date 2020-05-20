"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    //Method a.
    //if (items.includes(this.massKg))
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        items.forEach(function (item) {
            sum = sum + item.massKg;
        });
        return sum;
    };
    //Method b.
    Rocket.prototype.currentMassKg = function () {
        var currentMass = 0;
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    //method c.
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    //Method d.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
            //add astronaut to this.astronauts & returns true
        }
        else {
            return false;
        }
    };
    //Method e.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            //uses if true to see another astronaut can be added
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
