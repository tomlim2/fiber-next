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

void main() {
    vec2 uv = vUv;
    vec2 mouse = vec2(uMouseX, uMouseY);
    vec3 color = vec3(mouse.x, uv.y, sin(uTime));
    float opcity = 1.;

    gl_FragColor = vec4(color, opcity);
}