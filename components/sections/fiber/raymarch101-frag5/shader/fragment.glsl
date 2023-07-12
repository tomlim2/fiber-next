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
varying vec3 vNormal;

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
    return distance(p, vec3(0.0)) - 1.0;
}

float trace(vec3 origin, vec3 direction) {
    float dist = 0.0;
    for(int i = 0 ; i < 64 ; i++) {
        vec3 p = origin + direction * dist;
        float d = map(p);
        if(d <= 0.0) {
            break;
        }
        dist += d;
    }
    return dist;
}

void main() {
    vec2 uv = vUv * 2. - 1.;

    vec3 direction = normalize(vec3(uv, 1.0));
    vec3 origin = vec3(0.0, 0.0, -3.0);
    float dist = trace(origin, direction);
    vec3 color = vec3(1.0 - dist / 10.0);
    gl_FragColor = vec4(color, 1.0);
}