import p5 from "p5";

class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  constructor(p: p5) {
    this.position = p.createVector(p.width / 2, p.height / 2);
    this.velocity = p.createVector();
    this.acceleration = p.createVector();
  }

  show(p: p5) {
    p.strokeWeight(16);
    p.stroke(255);
    p.point(this.position.x, this.position.y);
  }
}

export default Boid;
