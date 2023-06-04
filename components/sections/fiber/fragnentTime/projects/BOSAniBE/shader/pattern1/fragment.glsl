#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float uMouseX;
uniform float uMouseY;

uniform float uParamsA;

uniform float uParamsB;
uniform float uParamsC;
uniform float uParamsD;

uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vUv;

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

void main() {
    vec2 st = vUv;
    st.x *= uWidth / uHeight;
    vec3 color = vec3(.0);

    st *= uParamsA;

    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float m_dist = 1.;

    for(int y = -1 ; y <= 1 ; y++) {
        for(int x = -1 ; x <= 1 ; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = random2(i_st + neighbor);
            point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            m_dist = min(m_dist, dist);
        }
    }

    color += 1.-vec3(m_dist, m_dist*.98, m_dist*.85);
    color -= .2;

    gl_FragColor = vec4(color, 1.);
}