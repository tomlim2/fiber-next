import p5 from "p5";
import Boid from "./boid";

const flock: Boid[] = [];

export default function sketchBoids(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600);
    for (let i = 0; i < 100; i++) {
      flock.push(new Boid(p));
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
