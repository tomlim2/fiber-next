#ifdef GL_ES
precision mediump float;
#endif

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

float random(in vec2 _st) {
    return fract(sin(dot(_st.xy, vec2(12.9898, 78.233))) *
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

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

#define NUM_OCTAVES 5

float fbm(in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for(int i = 0 ; i < NUM_OCTAVES ; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

float quiles(in vec2 _st) {
    return fbm(_st + vec2(fbm(_st + vec2(fbm(_st)))));
}

void main() {
    vec2 st = vUv;
    st *= uParamsA;
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = quiles(st + 0.00 * uTime);
    q.y = quiles(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = quiles(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = quiles(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = quiles(st + r);

    color = mix(vec3(0.101961, 0.619608, 0.666667), vec3(0.666667, 0.666667, 0.498039), clamp((f * f) * 4.0, 0.0, 1.0));

    color = mix(color, vec3(0, 0, 0.164706), clamp(length(q), 0.0, 1.0));

    color = mix(color, vec3(0.666667, 1, 1), clamp(length(r.x), 0.0, 1.0));

    gl_FragColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 1.);
}