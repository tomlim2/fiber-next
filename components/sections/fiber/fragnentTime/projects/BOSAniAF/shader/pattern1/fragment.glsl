#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

mat2 scale(vec2 _scale) {
    return mat2(_scale.x, 0.0, 0.0, _scale.y);
}

mat2 rotate2d(float _angle) {
    return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
}

float box(in vec2 _st, in vec2 _size) {
    _size = vec2(0.5) - _size * 0.5;
    vec2 uv = smoothstep(_size, _size + vec2(0.001), _st);
    uv *= smoothstep(_size, _size + vec2(0.001), vec2(1.0) - _st);
    return uv.x * uv.y;
}

float crossBox(in vec2 _st, float _size) {
    return box(_st, vec2(_size, _size / 4.)) +
        box(_st, vec2(_size / 4., _size));
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.0);

    st -= vec2(0.5);
    st = scale(vec2(sin(uTime) + 1.0)) * st;
    st = rotate2d(sin(uTime) * PI * 5.) * st;
    st += vec2(0.5);
    // Show the coordinates of the space on the background
    // color = vec3(st.x,st.y,0.0);

    // Add the shape on the foreground
    color += vec3(crossBox(st, 0.2));

    gl_FragColor = vec4(color, 1.0);
}