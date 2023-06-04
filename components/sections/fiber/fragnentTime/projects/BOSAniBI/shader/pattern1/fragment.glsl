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

float random(vec2 st) {
    return fract(sin(dot(st.xy + uParamsA, vec2(12.9898, 78.233))) *
        43758.5453123);
}

void main() {
    vec2 st = vUv;
    float rnd = random(st);

    vec3 color = vec3(rnd);
    vec3 blackColor = vec3(1.0);
    vec3 uvColor = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, color);

    gl_FragColor = vec4(mixedColor, 1.0);
}