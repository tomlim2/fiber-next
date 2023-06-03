#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

void main() {
  float angle = atan(vUv.x - .5, vUv.y - .5);
  angle /= PI * 2.;
  angle += .5;
  angle *= 10.;
  float strength = mod(angle, 1.);
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}