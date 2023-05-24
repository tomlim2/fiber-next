#define PI 3.14159265358979323846
#define TWO_PI 6.28318530718

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
    float flicker = sin(uTime);
    flicker = step(.5, flicker);
    vec3 color = vec3(flicker);
    // color + flickering;

    gl_FragColor = vec4(color, 1.0);
}