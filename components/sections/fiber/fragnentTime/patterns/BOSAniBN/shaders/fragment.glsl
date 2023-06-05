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
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))+uParamsB) *
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

#define OCTAVES 8
float fbm(in vec2 _st) {
    float value = 0.1;
    float amplitude = .65;
    float frequncy = 0.;

    for(int i = 0 ; i < OCTAVES ; i++) {
        value += amplitude * noise(_st);
        _st *= 2.;
        amplitude *= .5;
    }

    return value;
}

float quiles(in vec2 _st) {
    return fbm(_st + vec2(fbm(_st + vec2(fbm(_st)))));
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.0);
    color += vec3(quiles(st * uParamsA)*.85, quiles(st * uParamsA)*.95, quiles(st * uParamsA));

    gl_FragColor = vec4(color, 1.0);
}