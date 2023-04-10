#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

float random2(vec2 st, float offsetTime) {
    st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));

    return -1.0 + 2.0 * fract(sin(dot(st.xy, vec2(12.9898, 78.233)) + sin(offsetTime / 100.)) * 43758.5453123);
}

float noise(vec2 st, float offsetTime) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(random2(i + vec2(0.0, 0.0), offsetTime), random2(i + vec2(1.0, 0.0), offsetTime), u.x), mix(random2(i + vec2(0.0, 1.0), offsetTime), random2(i + vec2(1.0, 1.0), offsetTime), u.x), u.y);
}

void main() {
    vec2 st = vUv;

    vec3 color = vec3(0.0);
    st += .5;
    vec2 pos = vec2(st * 10.0);
    float n = noise(pos, uTime) * 2. + .1;
    color = vec3(n + 0.01, n, n - 0.01);

    gl_FragColor = vec4(color, 1.0);
}