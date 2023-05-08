import p5 from "p5";
class Particle {
  p: p5;
  pos: any;
  vel: any;
  acc: any;

  constructor(p: p5) {
    this.p = p;
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector().set(p.random(), p.random());
    this.acc = p.createVector(0, 0);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force: any) {
    this.acc.add(force);
  }

  show() {
    this.p.stroke(0);
    this.p.point(this.pos.x, this.pos.y);
  }

  edges() {
    if (this.pos.x > this.p.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = this.p.width;
    if (this.pos.y > this.p.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = this.p.height;
  }
}

export default Particle;
