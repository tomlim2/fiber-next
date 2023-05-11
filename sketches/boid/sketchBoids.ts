import p5 from "p5";
import Particle from "../vectorFields/particle";

export default function sketchVectorFields(p: p5): void {
  let inc = 1;
  let scl = 30;
  let cols: number, rows: number;
  let fr: p5.Element;
  let zoff = 0;

  let particles: any = [];
  let flowField: any;
  let particleNumber: number = 20;

  p.setup = () => {
    p.createCanvas(600, 600);
    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    fr = p.createP("");

    flowField = new Array(cols * rows);

    for (let i = 0; i < particleNumber; i++) {
      particles[i] = new Particle(p);
    }
  };

  p.draw = () => {
    // p.background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let ro = p.noise(xoff, yoff, zoff) * 2;
        let angle = p.map(ro, 0, 1, 0, p.TWO_PI / 2);
        let v = p.createVector(1, 0);
        v.rotate(angle);
        v.setMag(1);

        flowField[index] = v;

        xoff += inc;
        // p.stroke(0, 50);
        // p.push();
        // p.translate(x * scl, y * scl);
        // p.rotate(v.heading());
        // p.line(0, 0, scl, 0);
        // p.pop();
      }
      yoff += inc;
      zoff += 0.0005;
    }

    for (let i = 0; i < particleNumber; i++) {
      particles[i].follow(flowField, scl, cols);
      particles[i].update();
      particles[i].show();
      particles[i].edges(p.width, p.height);
    }

    fr.html(p.floor(p.frameRate()).toString());
  };
}
