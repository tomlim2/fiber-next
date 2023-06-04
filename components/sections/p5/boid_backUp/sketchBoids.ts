import p5 from "p5";
import Boid from "./boid";

const flock: any = [];
let alignSlider: any, cohesionSlider: any, separationSlider: any;

export default function sketchBoids(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600);

    alignSlider = p.createSlider(0, 5, 1, 0.1);
    cohesionSlider = p.createSlider(0, 5, 1, 0.1);
    separationSlider = p.createSlider(0, 5, 1, 0.1);

    for (let i = 0; i < 100; i++) {
      flock.push(new Boid(p));
    }
  };

  p.draw = () => {
    p.background(51);

    const alignValue = alignSlider.value();
    const cohesionValue = cohesionSlider.value();
    const separationValue = separationSlider.value();

    for (let boid of flock) {
      boid.edges(p);
      boid.flock(p, flock, alignValue, cohesionValue, separationValue);
      boid.update();
      boid.show(p);
    }
  };
}
