varying vec2 vUv;

void main() {
  float strength = step(0.2, max(abs(vUv.x - .5), abs(vUv.y - .5)));
  

  gl_FragColor = vec4(vec3(strength), 1.0);
}