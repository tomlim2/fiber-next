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
    return 1.-step(.8,random( floor(x*freq)-floor(t)));
}

void main() {
    vec2 st = vUv;
    float cols = 9.;
    float freq = 4.;
    float t = uTime*30.;
    int st_mod = int(fract(st.y * cols * 0.5) * 2.0);

    if(st_mod % 2 == 0){
        t*=-1.;
    }

    float offset = 1.;
    vec3 color = vec3(
                    randomSerie(st.x, freq*100., t+offset), 
                    randomSerie(st.x, freq*100., t), 
                    randomSerie(st.x, freq*100., t-offset));

    gl_FragColor = vec4(color,1.0);
}
