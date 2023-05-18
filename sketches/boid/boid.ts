import p5 from "p5";

class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  constructor(p: p5) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(p.random(), p.random());
    this.velocity.setMag(p.random(0.5, 1.5));
    this.acceleration = p.createVector();
  }

  align(p: p5, boids: any) {
    let perceptionRadius = 50;
    let steering = p.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.velocity);
    }
    return steering;
  }

  flock(p: p5, boids: any) {
    let alignment = this.align(p, boids);
    this.acceleration = alignment;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  show(p: p5) {
    p.strokeWeight(8);
    p.stroke(255);
    p.point(this.position.x, this.position.y);
  }
}

export default Boid;
