#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float uMouseX;
uniform float uMouseY;

uniform float uParamsA;

uniform float uParamsB;
uniform float uParamsC;
uniform float uParamsD;

uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vUv;

void main() {
    vec2 st = vUv;
    vec3 color = vec3(vUv.x, vUv.y, 1.);

    gl_FragColor = vec4(color, 1.);
}