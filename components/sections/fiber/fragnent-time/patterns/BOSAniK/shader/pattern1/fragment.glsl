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
    return step(.8,random( floor(x*freq)-floor(t) ));
}

void main() {
    vec2 st = vUv;
    
    st.x *= 1.;

    vec3 color = vec3(0.0);

    float cols = 2.;
    float freq = random(floor(uTime+10.))+abs(atan(uTime+10.)*0.1);
    float t = 60.+(uTime+10.)*(1.0-freq)*30.;

    if (fract(st.y*cols* 0.5) < 0.5){
        t *= -1.0;
    }

    freq += random(floor(st.y));

    float offset = 0.025;
    color = vec3(randomSerie(st.x, freq*100., t+offset),
                 randomSerie(st.x, freq*100., t),
                 randomSerie(st.x, freq*100., t-offset));

    gl_FragColor = vec4(color,1.0);
}
