varying vec2 vUv;

void main() {
  float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
  barX *= step(0.8, mod(vUv.y * 10.0, 1.0));

  float barY = step(0.4, mod(vUv.y * 10.0, 1.0));
  barY *= step(0.8, mod(vUv.x * 10.0, 1.0));

  float strength = barX + barY;
  strength = clamp(strength, 0.0, 1.0);

  vec3 blackColor = vec3(0.0);
  vec3 uvColor = vec3(vUv, 1.);
  vec3 mixedColor = mix(blackColor, uvColor, strength);
  

  gl_FragColor = vec4(vec3(mixedColor), 1.0);
}