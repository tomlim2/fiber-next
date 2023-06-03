#define pi 3.1415926535897932384626433832795

varying vec2 vUv;

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
  return vec2 (
    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
  );
}



void main() {
  vec2 rotatedUv = rotate(vUv, pi * .25, vec2(.5));
  vec2 lightUvX = vec2(rotatedUv.x * .2 + .4, rotatedUv.y);
  float lightX = .015 / distance(lightUvX, vec2(.5,.5));
  vec2 lightUvY = vec2(rotatedUv.y * .2 + .4, rotatedUv.x);
  float lightY = .015 / distance(lightUvY, vec2(.5,.5));
  float strength = lightX * lightY;
  
  gl_FragColor = vec4(vec3(strength), 1.0);
}