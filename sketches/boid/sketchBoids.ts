import p5 from "p5";
import Boid from "./boid";

const flock: Boid[] = [];

export default function sketchBoids(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600);
    flock.push(new Boid(p));
  };

  p.draw = () => {
    p.background(51);

    for (let boid of flock) {
      boid.show(p);
    }
  };
}
