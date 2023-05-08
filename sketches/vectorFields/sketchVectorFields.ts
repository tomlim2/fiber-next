import p5 from "p5";
import Particle from "./particle";

export default function sketchVectorFields(p: p5): void {
  let inc = 0.1;
  let scl = 30;
  let cols: number, rows: number;
  let fr: p5.Element;
  let zoff = 0;

  let particles = [] as any;

  p.setup = () => {
    p.createCanvas(600, 600);
    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    fr = p.createP("");

    for (let i = 0; i < 100; i++) {
      particles[i] = new Particle(p);
    }
  };

  p.draw = () => {
    p.background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = (x + y * p.width) * 4;
        let ro = p.noise(xoff, yoff, zoff) * 2.5;
        let angle = p.map(ro, 0, 1, 0, p.TWO_PI / 2);
        let v = p.createVector(1, 0);
        v.rotate(angle);

        xoff += inc;
        p.stroke(0);
        p.push();
        p.translate(x * scl, y * scl);
        p.rotate(v.heading());
        // p.line(0, 0, scl, 0);
        p.pop();
      }
      yoff += inc;
      zoff += 0.001;
    }

    for (let i = 0; i < 100; i++) {
      particles[i].update();
      particles[i].show();
      particles[i].edges();
    }

    fr.html(p.floor(p.frameRate()).toString());
  };
}
