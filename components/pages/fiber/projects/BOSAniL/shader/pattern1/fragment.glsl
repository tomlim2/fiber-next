#define PI 3.14159265358979323846

varying vec2 vUv;
uniform float uTime;

float random (in float x) {
    return fract(sin(x)*1e4);
}

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

float randomSerie(float x, float freq, float t) {
    return sin(floor(x*freq)-t);
}

void main() {
    vec2 st = fract(vUv);
    float freq = 2.;
    float t = 60.+(uTime+10.)*(1.0-freq)*30.;
    float offset = 0.025;
    vec3 color = vec3(randomSerie(st.x, freq*100., t));

    gl_FragColor = vec4(color,1.0);
}
