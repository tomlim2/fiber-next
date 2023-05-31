import p5 from "p5";

class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  maxForce: number;

  constructor(p: p5) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(p.random() - 0.5, p.random() - 0.5);
    this.velocity.setMag(p.random(2, 4));
    this.acceleration = p.createVector();
    this.maxForce = .2;
  }

  edges(p: p5) {
    if (this.position.x > p.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = p.width;
    }
    if (this.position.y > p.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = p.height;
    }
  }

  align(p: p5, boids: Boid[]) {
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
      if (other !== this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(p: p5, boids: Boid[]) {
    let alignment = this.align(p, boids);
    this.acceleration = alignment;
  }

  update(p: p5) {
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
