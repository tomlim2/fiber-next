import p5 from "p5";

class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  constructor(p: p5) {
    this.position = p.createVector(p.width / 2, p.height / 2);
    this.velocity = p.createVector(p.random() - 0.5, p.random() - 0.5);
    this.velocity.setMag(p.random(0.5, 1.5));
    this.acceleration = p.createVector();
  }

  align(p: p5, boids: Boid[]) {
    let perceptionRadius = 100;
    let avg = p.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < perceptionRadius) {
        avg.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      avg.div(boids.length);
      this.velocity = avg;
    }
  }

  update(p: p5) {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  show(p: p5) {
    p.strokeWeight(16);
    p.stroke(255);
    p.point(this.position.x, this.position.y);
  }
}

export default Boid;
