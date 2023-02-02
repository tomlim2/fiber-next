varying vec2 vUv;

void main() {
  float strength = 1. - step(.01, abs(distance(vUv, vec2(.5)) - .25));
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}