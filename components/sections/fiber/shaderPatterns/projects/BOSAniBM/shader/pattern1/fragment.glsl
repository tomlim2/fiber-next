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
    vec2 boxSize = vec2(.5);
    boxSize = vec2(.5) - boxSize * .5;

    vec2 simpleBox = smoothstep(boxSize, boxSize + vec2(.001), st);
    simpleBox *= smoothstep(boxSize, boxSize + vec2(0.001), vec2(1.0) - st);
    vec3 color = vec3(simpleBox.x * simpleBox.y);

    gl_FragColor = vec4(color, 1.0);
}