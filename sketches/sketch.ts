import p5 from 'p5';

export default function sketch(p: p5): void {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  };
}
