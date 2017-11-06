class Elevator {
  constructor(){
    this.floor      = 0; //POSICIÓN ACTUAL DEL ASCENSOR
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers   = [];

  }
  start() {
    let listen = setInterval(() => {
      this.update();
    },1000);
  }

//The start function should start a setInterval call the update function every second

  stop() {
    clearInterval(this.listen);
    } //The stop function should stop the elevator's setInterval listening for requests

  update() {
    this.log ();
  }

  _passengersEnter() {}
  _passengersLeave() { }

  floorUp() {
    while (this.floor < this.MAXFLOOR){
      this.floor += 1;
      this.update();
    }
    this.floorDown();
  }

  floorDown() {
  while (this.floor > 0){
    this.floor -= 1;
    this.update();
  }
  }

  call(person) {
    this.requests.push(person);

    //Add the whole person object to the requests array. The elevator will need all that information later
  }

   log() {
   console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
