varying vec2 vUv;

void main() {
  vec2 lightUv = vec2(vUv.x * .2 + .4,vUv.y);
  float strength = .015 / distance(lightUv, vec2(.5,.5));
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}