#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

void main() {
  float angle = atan(vUv.x - .5, vUv.y - .5);
  angle /= PI * 2.;
  angle += .5;
  float strength = sin(angle * 100.);
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}