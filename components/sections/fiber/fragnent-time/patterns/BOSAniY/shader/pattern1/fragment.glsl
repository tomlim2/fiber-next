#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
varying vec2 vUv;

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

float random(in float x) {
    return fract(sin(x) * 1e4);
}

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float pattern(vec2 st, vec2 v, float t) {
    vec2 p = floor(st + v);
    return step(t, random(100. + p * .000001) + random(p.y) * 0.5);
}

void main() {
    vec2 st = vUv;
    st *= uWidth / uHeight;
    //scale
    vec2 grid = vec2(20.0, 20.0);
    st *= grid;

    vec3 color = vec3(0.0);

    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    // vec2 vel = vec2(uTime * 2. * max(grid.x, grid.y)); // time

    // vel *= vec2(.0, -1.) * random(1.0 + ipos.x); // direction
    // vec3 color = vec3(0.);

    // color = vec3(pattern(st, vel, 0.5));
    // color *= step(0., fpos.x);
    float point = random(ipos);
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);

    color += 1. - step(.02, point);
    // color.r += step(.98, fpos.x) + step(.98, fpos.y);

    gl_FragColor = vec4(color, 1.0);
}