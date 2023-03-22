#define PI 3.14159265358979323846

uniform float uTime;
varying vec2 vUv;

float random(in float x) {
    return fract(sin(x) * 1e4);
}

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.);
    //scale
    vec2 grid = vec2(10.,2.0);
    st *= grid;

    vec2 ipos = floor(st);

    color = vec3(random(ipos));

    gl_FragColor = vec4(color, 1.0);
}