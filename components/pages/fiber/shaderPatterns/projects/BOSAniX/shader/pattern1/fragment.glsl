#define PI 3.14159265358979323846

uniform float uTime;
varying vec2 vUv;

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

void main() {
    vec2 st = vUv;
        // st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(.0);

    st *= 2.;

    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float m_dist = 1.;

    int x = 0;
    int y = 0;

    vec2 neighbor = vec2(float(x), float(y));
    vec2 point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    vec2 diff = neighbor + point - f_st;
    float dist = length(diff);
    m_dist = min(m_dist, dist);

    x = 1;
    y = 0;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);

    x = 0;
    y = 1;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);

    x = 1;
    y = 1;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);

    x = 0;
    y = -1;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);

    x = -1;
    y = 0;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);

    x = -1;
    y = -1;

    neighbor = vec2(float(x), float(y));
    point = i_st + neighbor;
    point = 0.5 + 0.5 * sin(uTime + 6.2831 * point);
    diff = neighbor + point - f_st;
    dist = length(diff);
    m_dist = min(m_dist, dist);


    color += m_dist;

    gl_FragColor = vec4(color, 1.0);
}