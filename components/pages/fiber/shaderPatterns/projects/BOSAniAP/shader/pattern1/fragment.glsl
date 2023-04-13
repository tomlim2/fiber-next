#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

uniform float offsetX;

varying vec2 vUv;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x), mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main() {
    vec2 st = vUv;

    // vec2 pos = st.yx * vec2(10., 3.);
    // pos = rotate2d(noise(pos) + uTime) * pos;

    // vec3 color = vec3(0.0);
    st *= offsetX;
    st -= offsetX;
    vec2 fSt = fract(st);
    vec2 pos1 = fSt;
    vec2 pos2 = fSt;
    vec2 pos3 = fSt;
    pos1 = rotate2d(noise(st) + uTime) * pos1;
    pos1 += .5;
    pos2 = rotate2d(noise(st) + uTime + 0.3) * pos2;
    pos2 += .5;
    pos3 = rotate2d(noise(st) + uTime + 0.6) * pos3;
    pos3 += .5;
    // float n = rotate2d(noise(pos) + uTime);
    // color = vec3(n + 0.01, n, n - 0.01);

    // gl_FragColor = vec4(color, 1.0);

    gl_FragColor = vec4(vec3(pos2.x, pos1.x, pos3.y), 1.0);
}