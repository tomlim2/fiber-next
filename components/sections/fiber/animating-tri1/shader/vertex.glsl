uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vUv = uv;

    vec3 pos = position;
    pos.x += sin((vUv.y + uTime) * 10.0) * 0.1;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    vNormal = normal;
}