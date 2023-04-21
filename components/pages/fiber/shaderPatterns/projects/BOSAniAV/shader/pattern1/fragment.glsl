#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float uMouseX;
uniform float uMouseY;

uniform float uTileCount;

uniform float uAmp;
uniform float uFreq;

varying vec2 vUv;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) *
        43758.5453123);
}

float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float boxo(in vec2 _st, in vec2 _size) {
    _size = vec2(0.5) - _size * 0.5;
    vec2 uv = smoothstep(_size, _size + vec2(0.001), _st);
    uv *= smoothstep(_size, _size + vec2(0.001), vec2(1.0) - _st);
    return uv.x * uv.y;
}

void main() {
    vec2 st = vUv;

    const int octaves = 1;
    float lacunarity = 2.0;
    float gain = 0.5;

    float amplitude = uAmp;
    float frequency = uFreq;

    // st -= vec2(.5);
    // float pct = distance(st, vec2(.5));
    st *= uTileCount;
    st = fract(st);
    st -= vec2(0.5);
    float flow = sin(uTime * uFreq);
    float t = 0.01 * (-uTime * 130.0);

    for(int i = 0 ; i < octaves ; i++) {
        flow += amplitude * noise(vec2(frequency * t));
        frequency *= lacunarity;
        amplitude *= gain;
    }

    st *= rotate2d(flow * PI * .5);
    // vec2 fl = floor(st);
    // vec2 fr = fract(st);
    st += vec2(0.5);

    vec3 color = vec3(boxo(st, vec2(.5)));
    gl_FragColor = vec4(color, 1.0);
}