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

  _passengersEnter(this.floor) {

    for (i=0; i<elevator.waitingList.length; i++) {
      console.log(this.waitingList.length)
      //
      // if (this.waitingList[i].originFloor === this.floor) {
      //   console.log(this.waitingList[i]);
      //   this.passengers.push(this.waitingList[i]) // add the person into the passengers array
      //   this.waitingList.shift(this.waitingList[i]); //delete the passenger from the waitingList
      //   this.requests.push(person.originFloor); //Add the destination floor of the passenger to the elevator requests
      //   console.log(`${this.waitingList[i].name} has enter the elevator`);
      // }
      // }
      }


//   When the elevator arrives to any floor, it should check the waitingList array to verify if a person is waiting there. If this condition occurs:
//
// add the person into the passengers array
// delete the passenger from the waitingList
// Add the destination floor of the passenger to the elevator requests
// We will show a message to indicate what just happens:
//
// Julia has enter the elevator
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
    this.waitingList.push(person);
    this.requests.push(person.originFloor);


    //Add the whole person object to the requests array. The elevator will need all that information later
  }

   log() {
   console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
