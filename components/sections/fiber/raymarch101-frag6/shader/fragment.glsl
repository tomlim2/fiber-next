precision highp float;
uniform vec2 u_resolution;  // Width and height of the shader
uniform float u_time;  // Time elapsed

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
varying vec3 vNormalz;

#define EPSILON 0.0001
#define steps 128

// polynomial smooth 
float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

// polynomial smooth 
float smax(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (a - b) / k, 0.0, 1.0);
    return mix(b, a, h) + k * h * (1.0 - h);
}

float map(vec3 p) {
    // float circ = distance(p, vec3(0.0)) - 1.0;
    float cube = length(max(abs(p) - vec3(0.5), 0.0))-.2;
    return cube;
}

float trace(vec3 origin, vec3 direction) {
    float dist = 0.0;
    for(int i = 0 ; i < steps ; i++) {
        vec3 p = origin + direction * dist;
        float d = map(p);
        if(d <= 0.0) {
            break;
        }
        dist += d;
    }
    return dist;
}

vec3 normalz(vec3 p) {
    return normalize(vec3(map(vec3(p.x + EPSILON, p.y, p.z)) - map(vec3(p.x - EPSILON, p.y, p.z)), map(vec3(p.x, p.y + EPSILON, p.z)) - map(vec3(p.x, p.y - EPSILON, p.z)), map(vec3(p.x, p.y, p.z + EPSILON)) - map(vec3(p.x, p.y, p.z - EPSILON))));
}

void main() {
    vec2 uv = vUv * 2. - 1.;

    vec3 light = vec3(2.0, 5.0, 2.0);

    vec3 direction = normalize(vec3(uv, 1.0));
    vec3 origin = vec3(-(uMouseX - .5) * 4., -(uMouseY - .5) * 4., -3.0);
    float dist = trace(origin, direction);

    vec3 p = origin + dist * direction;
    vec3 norm = normalz(p);

    vec3 color = abs(norm);
    // color = vec3(1.0 - dist / 10.0);
    gl_FragColor = vec4(color, 1.0);
}