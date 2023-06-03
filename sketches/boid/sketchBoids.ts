import p5 from "p5";
import Boid from "./boid";

const flock: Boid[] = [];
const count = 200;

export default function sketchBoids(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600);
    if (flock.length < 1) {
      for (let i = 0; i < count; i++) {
        flock.push(new Boid(p));
      }
    }
  };

  p.draw = () => {
    p.background(51);

    for (let boid of flock) {
      boid.edges(p);
      boid.flock(p, flock);
      boid.update(p);
      boid.show(p);
    }
  };
}
