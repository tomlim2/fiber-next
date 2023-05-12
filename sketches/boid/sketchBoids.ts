import p5 from "p5";

export default function sketchBoids(p: p5): void {
  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    p.background(51);
  };
}
