// было
/*function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + ' | ' + this.length + ' days');
}

var maui = new Vacation("Maui", 7);

maui.print();*/


// стало
// создание класса
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length} days`);
  }
}

// создаем экземпляр класса
const trip = new Vacation("Santiago, Chile", 7);

trip.print();

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripOne = new Expedition("Mt. Whitney", 3, ["sunglasses", "player flags", "camera"]);
tripOne.print();

