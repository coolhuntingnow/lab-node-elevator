const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person = new Person();



elevator.call(person);
//console.log(elevator.waitingList);
