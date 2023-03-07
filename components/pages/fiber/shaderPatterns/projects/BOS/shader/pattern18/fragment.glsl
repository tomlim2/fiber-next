#define PI 3.14159265358979323846

varying vec2 vUv;

void main() {
  vec2 st = vUv;
  vec2 grid = vec2(2.,2.);
  st *= grid;
  vec3 color = vec3(0.0f);

  st = fract(st);
  vec2 pos = vec2(0.5) - st;

  float r = length(pos) * 2.0;
  float a = atan(pos.y, pos.x);

  float f = cos(a * 3.);
    // f = abs(cos(a*3.));
    // f = abs(cos(a*2.5))*.5+.3;
    f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
    // f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

  color = vec3(1. - smoothstep(f, f + 0.02, r));

  gl_FragColor = vec4(color, 1.0);
}