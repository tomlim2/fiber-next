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

void main() {
    vec2 st = vUv;

    // pos = rotate2d(noise(pos) + uTime) * pos;
    // vec2 pos = st.yx * vec2(10., 3.);

    // vec3 color = vec3(0.0);
    // st = rotate2d(st.x) * vec2(1.,2.);
    vec2 sta = st;
    sta *= vec2(2., 10.);
    sta -= tileCount;

    float direction = 1.;

    vec2 flSt = floor(sta);

    if(mod(2., flSt.x) == 0.) {
        direction *= -1.;
    }

    float offsetTime = (flSt.x + flSt.y) / 2. * direction;

    vec2 fSt = fract(sta);
    vec2 pos1 = fSt;
    vec2 pos2 = fSt;
    vec2 pos3 = fSt;

    float n = noise(sta + 3. * sin(uTime));
    mat2 noiseInsideNoise = rotate2d(n + uTime + offsetTime);
    pos1 = (noiseInsideNoise) * pos1;
    pos1 += .5;
    pos2 = (noiseInsideNoise) * pos2 + .01;
    pos2 += .5;
    pos3 = (noiseInsideNoise) * pos3 - .01;
    pos3 += .5;
    // float n = rotate2d(noise(pos) + uTime);
    // color = vec3(n + 0.01, n, n - 0.01);

    // gl_FragColor = vec4(color, 1.0);

    gl_FragColor = vec4(vec3(pos2.x, pos1.x, pos3.x), 1.0);
}