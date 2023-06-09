#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

vec2 rotate2D(vec2 _st, float _angle) {
    _st -= 0.5;
    _st = mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

vec2 tile(vec2 _st, float _zoom) {
    _st *= _zoom;
    return fract(_st);
}

float box(vec2 _st, vec2 _size, float _smoothEdges) {
    _size = vec2(0.5) - _size * 0.5;
    vec2 aa = vec2(_smoothEdges * 0.5);
    vec2 uv = smoothstep(_size, _size + aa, _st);
    uv *= smoothstep(_size, _size + aa, vec2(1.0) - _st);
    return uv.x * uv.y;
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.0);

    // Divide the space in 4
    st = tile(st, 4.);

    // Use a matrix to rotate the space 45 degrees
    st = rotate2D(st, PI * mouseX);

    // Draw a square
    color = vec3(box(st, vec2(0.7), 0.01));
    // color = vec3(st,0.0);

    gl_FragColor = vec4(color, 1.0);
}