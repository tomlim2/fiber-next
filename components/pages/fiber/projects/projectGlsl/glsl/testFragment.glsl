#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
  return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

void main() {
  // 35
  // float strength = step(.02, abs(distance(vUv, vec2(.5)) - .25)) ;

  // 36
  float strength = 1.-step(.02, abs(distance(vUv, vec2(.5)) - .25)) ;

  gl_FragColor = vec4(vec3(strength), 1.);
}