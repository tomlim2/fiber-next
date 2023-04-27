#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float uMouseX;
uniform float uMouseY;

uniform float uTileCount;

uniform float uAmp;
uniform float uFreq;
uniform int uOctaves;

varying vec2 vUv;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

// #define OCTAVES 1
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = uAmp;
    float frequency = uFreq;
    int OCTAVES = uOctaves;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st * frequency);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}


void main() {
    vec2 st = vUv;

    st.x *= uWidth/uHeight;

    vec2 q = vec2(0.);
    q.x = fbm(st + 0. * uTime);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = fbm(st + r);

    vec3 color = vec3(0., f*.58, f*.65);

    gl_FragColor = vec4(color,1.0);
}