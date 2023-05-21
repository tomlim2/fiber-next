varying vec2 vUv;

void main() {
  float strength = abs(distance(vUv, vec2(.5)) - .2);
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}