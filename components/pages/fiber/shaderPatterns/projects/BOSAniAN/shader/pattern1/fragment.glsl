#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x), mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float lines(in vec2 pos, float b) {
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0, .5 + b * .5, abs((sin(pos.x * 3.1415) + b * 2.0)) * .5);
}

void main() {
    vec2 st = vUv;

    vec2 pos = st.yx * vec2(10., 3.);

    float pattern = pos.x;

    // Add noise
    pos = rotate2d(noise(pos) + uTime / 10.) * pos;

    // Draw lines
    pattern = lines(pos, .5);

    gl_FragColor = vec4(vec3(pattern), 1.0);
}