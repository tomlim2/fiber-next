#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

uniform float tileCount;

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
float lines(in vec2 pos, float b) {
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0, .5 + b * .5, abs((sin(pos.x * 3.1415) + b * 2.0)) * .5);
}

void main() {
    vec2 st = vUv;

    // vec2 pos = st.yx * vec2(10., 3.);
    // pos = rotate2d(noise(pos) + uTime) * pos;

    vec3 color = vec3(0.0);
    st *= vec2(20.);
    st -= vec2(9.5, 9.5);
    float pct = 0.0;
    pct = distance(st, vec2(0.5));
    vec2 pos = vec2(pct) * .1;
    vec2 pos1 = vec2(0.);
    vec2 pos2 = vec2(0.);
    vec2 pos3 = vec2(0.);
    float offsetTime = abs(st.x - .5) + abs(st.y - .5);
    float u_time = -uTime + offsetTime;
    float f_noise = noise(st * pos) + u_time;
    pos1 = rotate2d((f_noise + .01 + sin(u_time)*1.)) * vec2(1.);
    pos2 = rotate2d((f_noise )) * vec2(1.);
    pos3 = rotate2d((f_noise - .01 + cos(u_time)*1.)) * vec2(1.);

    // float n = rotate2d(noise(pos) + uTime);
    color = vec3(pos2.x, pos1.x, pos3.x);
    color = clamp(color, vec3(0.), vec3(1.));
    // gl_FragColor = vec4(color, 1.0);

    gl_FragColor = vec4(color, 1.0);
}