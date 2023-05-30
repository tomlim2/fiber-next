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

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) *
        43758.5453123);
}

float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}

void main() {
    vec2 st = vUv;
    float offset = .001;
    float stepRange = .75;
    float flickerP = noise(vec2(uTime * 2. - offset));
    float flickerC = noise(vec2(uTime * 2.));
    float flickerN = noise(vec2(uTime * 2. + offset));
    flickerP = step(stepRange - offset, flickerP);
    flickerC = step(stepRange, flickerC);
    flickerN = step(stepRange + offset, flickerN);
    vec3 color = vec3(flickerP, flickerC, flickerN);
    // color + flickering;

    gl_FragColor = vec4(color, 1.0);
}