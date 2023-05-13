import p5 from "p5";

class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  constructor(p: p5) {
    this.position = p.createVector();
    this.velocity = p.createVector();
    this.acceleration = p.createVector();
  }
}

export default Boid;
