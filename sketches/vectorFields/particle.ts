import p5 from "p5";

class Particle {
  p: p5;
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  prevPos: p5.Vector;
  maxSpeed: number;

  constructor(p: p5) {
    this.p = p;
    this.maxSpeed = 4;
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc).limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force: any) {
    this.acc.add(force);
  }

  follow(vector: any, scl: any, cols: any) {
    let x = this.p.floor(this.pos.x / scl);
    let y = this.p.floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vector[index];
    this.applyForce(force);
  }

  show() {
    this.p.stroke(0, 10);
    // this.p.strokeWeight(4);
    // this.p.point(this.pos.x, this.pos.y);
    this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges(width: number, height: number) {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}

export default Particle;
