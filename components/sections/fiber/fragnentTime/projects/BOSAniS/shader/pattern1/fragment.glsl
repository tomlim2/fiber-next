#define PI 3.14159265358979323846

uniform float uTime;
varying vec2 vUv;

vec2 rotate2D(vec2 _st, float _angle) {
    _st -= 0.5;
    _st = mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(in float x) {
    return fract(sin(x) * 1e4);
}

void main() {
    vec2 st = vUv;
    vec2 grid = vec2(9., 9.);
    st *= grid;
    float offset = (vUv.x + vUv.y) / 2.;
    float iT = floor(offset + uTime);
    float fT = fract(offset + uTime);
    float offsetRand = mix(random(iT), random(iT + 1.0), smoothstep(0., 1., fT));
    float t = uTime + offsetRand;

    st = fract(st);
    st = rotate2D(st, PI * (sin(uTime-abs(vUv.x - .5) - abs(vUv.y - .5)))*2.);
    vec2 pos = vec2(0.5) - st;

    float r = length(pos) * 2.0;
    float a = atan(pos.y, pos.x);

    float f = cos(a * 3.);
    f = abs(cos(a * 12.) * sin(a * 3.)) * .8 + .1;
    vec3 color = vec3(0.0f);
    color = vec3(1. - smoothstep(f, f + 0.02, r));

    gl_FragColor = vec4(color, 1.0);
}