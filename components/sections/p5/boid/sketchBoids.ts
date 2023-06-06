import p5 from "p5";
import Boid from "./boid";

const flock: Boid[] = [];
let alignSlider: any, cohesionSlider: any, separationSlider: any;
const count = 200;

export default function SketchBoids(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600);

    alignSlider = p.createSlider(0, 5, 1, 0.1);
    cohesionSlider = p.createSlider(0, 5, 1, 0.1);
    separationSlider = p.createSlider(0, 5, 1, 0.1);

    if (flock.length < 1) {
      for (let i = 0; i < count; i++) {
        flock.push(new Boid(p));
      }
    }
  };

  p.draw = () => {
    p.background(245);

    const alignValue = alignSlider.value();
    const cohesionValue = cohesionSlider.value();
    const separationValue = separationSlider.value();

    for (let boid of flock) {
      boid.edges(p);
      boid.flock(p, flock, alignValue, cohesionValue, separationValue);
      boid.update(p);
      boid.show(p);
    }
  };
}
