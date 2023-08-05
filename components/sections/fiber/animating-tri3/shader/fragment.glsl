#include <common>
precision highp float;
uniform vec2 u_resolution;  // Width and height of the shader

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
varying vec3 vNormalz;

#define steps 1024

void main() {
    vec2 uv = vUv;
    // float background = smoothstep(-0.25, 0.25, uv.x);
    // float f = fbm(4.0 * uv);
    float r = sqrt(dot(uv, uv));
    float a = atan(uv.x, uv.y);
    vec3 color = vec3( 0.5);
    float opacity = 1.0;

    gl_FragColor = vec4(color, opacity);
}