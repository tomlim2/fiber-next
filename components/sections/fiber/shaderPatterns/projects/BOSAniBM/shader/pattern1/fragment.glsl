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

void main() {
    vec2 st = vUv;
    vec2 f_st = fract(st);
    f_st -= vec2(0.5);
    vec2 c1 = f_st * rotate2d(PI * uTime / 2.);
    c1 += vec2(0.5);

    vec3 color = vec3(boxi(c1, vec2(.75, .1)), 1.0);

    gl_FragColor = vec4(color, 1.0);
}