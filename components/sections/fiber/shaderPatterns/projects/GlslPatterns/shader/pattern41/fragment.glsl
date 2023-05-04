varying vec2 vUv;

void main() {
  float angle = atan(vUv.x - .5, vUv.y - .5);
  float strength = angle;
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}