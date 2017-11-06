class Elevator {
  constructor(){
    this.floor      = 0; //POSICIÓN ACTUAL DEL ASCENSOR
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.requests   = [];
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

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
   this.direction = up;
   return this.direction;
  }

  floorDown() { }
  call() { }

  log() {
   console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;



// The Elevator class
//
// First, the elevator needs methods to move.
//
// In order to make it move, it will need a direction and a current position (floor). Let's focus on four main methods:
//
// *The update function should (for now) display the current status of the elevator by calling the log function.

// The log function should just print the information related with position and direction:
// Direction: up | Floor: 0
// The start function should start a setInterval call the update function every second
// The stop function should stop the elevator's setInterval listening for requests
// These last two functions are key to the exercise.
//
// Remember to use JavaScript functions such as setTimeout() to create the listener
