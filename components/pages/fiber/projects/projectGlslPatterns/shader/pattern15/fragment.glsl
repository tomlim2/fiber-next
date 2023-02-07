varying vec2 vUv;

void main() {
  float barX = step(0.4, mod(vUv.x * 10.0 + .2, 1.0));
  barX *= step(0.8, mod(vUv.y * 10.0  + .4, 1.0));

  float barY = step(0.4, mod(vUv.y * 10.0 + .2, 1.0));
  barY *= step(0.8, mod(vUv.x * 10.0 + .4, 1.0));

  float strength = barX + barY;
  

  gl_FragColor = vec4(vec3(strength), 1.0);
}