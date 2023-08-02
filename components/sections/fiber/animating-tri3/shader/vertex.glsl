uniform float uTime;

attribute float uARandom;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vUv = uv;

    vec3 pos = position;
    // pos.x += uARandom * sin((vUv.y + uTime) * 10.0) * 0.1;
    pos += uARandom * (0.5 * sin(uTime) + 0.5) * normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    vNormal = normal;
}