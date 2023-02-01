varying vec2 vUv;

void main() {
  vec2 lightUvX = vec2(vUv.x * .2 + .4,vUv.y);
  float lightX = .015 / distance(lightUvX, vec2(.5,.5));
  vec2 lightUvY = vec2(vUv.y * .2 + .4,vUv.x);
  float lightY = .015 / distance(lightUvY, vec2(.5,.5));
  float strength = lightX * lightY;
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}