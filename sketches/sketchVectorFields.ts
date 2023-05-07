import p5 from "p5";

export default function sketchVectorFields(p: p5): void {
  let inc = 0.1;
  let scl = 30;
  let cols: number, rows: number;
  let fr: p5.Element;

  p.setup = () => {
    p.createCanvas(600, 600);
    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    fr = p.createP("");
  };

  p.draw = () => {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = (x + y * p.width) * 4;
        let r = p.noise(xoff, yoff) * 255;
        let angle = p.map(r, 0, 255, 0, p.TWO_PI);
        let v = p.createVector(1, 0);
        v.rotate(angle);

        xoff += inc;
        p.stroke(0);
        p.push();
        p.translate(x * scl, y * scl);
        p.rotate(v.heading());
        p.line(0, 0, scl, 0);
        p.pop();
      }
      yoff += inc;
    }

    fr.html(p.floor(p.frameRate()).toString());
  };
}
