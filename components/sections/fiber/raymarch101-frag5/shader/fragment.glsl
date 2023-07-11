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

// polynomial smooth 
float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

// polynomial smooth 
float smax(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (a - b) / k, 0.0, 1.0);
    return mix(b, a, h) + k * h * (1.0 - h);
}

float map(vec2 coord) {
    vec2 mouse = vec2(uMouseX, uMouseY);
    float circle1 = 1.0 - distance(coord, mouse) - .9;
    float circle2 = 1.0 - distance(coord, vec2(.2, .3)) - .8;
    float smoothCircles = smax(circle1, circle2, .2);
    float quad = length(max(vec2(0.1, 0.1) - coord, 0.9));
    return quad;
}

void main() {
    vec2 uv = vUv;

    vec3 colorA = vec3(.8, .2, .2);
    vec3 colorB = vec3(.2, .8, .2);
    vec3 colorC = vec3(.2, .2, .8);
    vec3 colorD = vec3(1., 1., 1.);
    float opcity = 1.0;

    vec3 color = colorA * step(0.0, map(uv));
    color += fract(min(0., map(vUv)) * 10.);
    gl_FragColor = vec4(color, opcity);
}