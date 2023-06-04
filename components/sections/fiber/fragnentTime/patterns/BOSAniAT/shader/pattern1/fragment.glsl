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

    // st -= vec2(.5);
    // float pct = distance(st, vec2(.5));
    st *= uTileCount;
    st = fract(st);
    st -= vec2(0.5);
    float flow = sin(uTime * uFreq);
    float t = 0.01 * (-uTime * 130.0);

    flow += sin(uTime * uFreq * 2.1 + t) * 4.5;
    flow += sin(uTime * uFreq * 1.72 + t * 1.121) * 4.0;
    flow += sin(uTime * uFreq * 2.221 + t * 0.437) * 5.0;
    flow += sin(uTime * uFreq * 3.1122 + t * 4.269) * 2.5;
    flow *= uAmp*0.06;

    st *= rotate2d(flow * PI * .5);
    // vec2 fl = floor(st);
    // vec2 fr = fract(st);
    st += vec2(0.5);

    vec3 color = vec3(boxo(st, vec2(.5)));
    gl_FragColor = vec4(color, 1.0);
}