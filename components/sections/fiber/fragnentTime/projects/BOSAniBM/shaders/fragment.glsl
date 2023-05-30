#define PI 3.14159265358979323846
#define TWO_PI 6.28318530718

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
mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

vec2 boxi(in vec2 _st, in vec2 _size) {
    _size = vec2(.5) - _size * .5;
    vec2 uv = smoothstep(_size, _size + vec2(.001), _st);
    uv *= smoothstep(_size, _size + vec2(.001), vec2(1.) - _st);
    return vec2(uv.x, uv.y);
}

float fbm(in vec2 offset) {
    float amplitude = 1.;
    float frequency = 1.;
    float timeWithOffset = uTime + offset.x + offset.y;
    float fbms = sin(timeWithOffset * frequency);
    float t = 0.01 * (-uTime * 130.0);
    fbms += sin(timeWithOffset * frequency * 2.1 + t) * 4.5;
    fbms += sin(timeWithOffset * frequency * 1.72 + t * 1.121) * 4.0;
    fbms += sin(timeWithOffset * frequency * 2.221 + t * 0.437) * 5.0;
    fbms += sin(timeWithOffset * frequency * 3.1122 + t * 4.269) * 2.5;
    fbms *= amplitude * 0.06;
    return fbms;
}

void main() {
    vec2 st = vUv;
    st *= 12.;
    vec2 fr_st = fract(st);
    vec2 fl_st = floor(st);

    fr_st -= vec2(0.5);
    vec2 c1 = fr_st * rotate2d(PI * fbm(fl_st / 18.));
    c1 += vec2(0.5);

    vec3 color = vec3(boxi(c1, vec2(.75, .1)).y, boxi(c1, vec2(.75, .1)).x, 1.0);

    gl_FragColor = vec4(color, 1.0);
}