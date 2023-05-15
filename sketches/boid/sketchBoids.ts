import p5 from "p5";
import Boid from "./boid";

const flock: any = [];

export default function sketchBoids(p: p5): void {
  p.setup = () => {
    p.createCanvas(600, 600);
    flock.push(new Boid(p));
  };

  p.draw = () => {
    p.background(51);
  };
}
