uniform float uTime;

attribute float uARandom;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vUv = uv;

    vec3 pos = position;
    pos +=  uARandom * normal;
    // pos.x += uARandom * sin((vUv.y + uTime) * 10.0) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    vNormal = normal;
}