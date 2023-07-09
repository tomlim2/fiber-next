precision highp float;
uniform vec2 u_resolution;  // Width and height of the shader
uniform float u_time;  // Time elapsed

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
varying vec3 vNormal;

float circle(vec2 uv, vec2 center, float r) {
    float edgeOffset = 0.05;
    // return 1. - step(r, distance(uv, center));
    return 1. - smoothstep(r - edgeOffset, r + edgeOffset, distance(uv, center));
}

void main() {
    vec2 uv = vUv;
    vec2 mouse = vec2(uMouseX, uMouseY);
    float opcity = 1.;

    vec3 colorA = vec3(.8, .2, .2);
    vec3 colorB = vec3(.2, .8, .2);
    vec3 colorC = vec3(.2, .2, .8);

    vec3 color = colorA * circle(uv, vec2(.5, .5), .1);
    color += colorB * circle(uv, mouse, .2);
    gl_FragColor = vec4(color, opcity);
}