#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

float circle(in vec2 _st, in float _radius) {
    vec2 l = _st - vec2(0.5);
    return 1. - smoothstep(_radius - (_radius * 0.01), _radius + (_radius * 0.01), dot(l, l) * 4.0);
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.0);

    st *= 4.0;      // Scale up the space by 3
    float row = floor(st.y);

    st = fract(st); // Wrap around 1.0
    vec3 num = vec3(0.0);
    mod(row, 2.0) == 0.0 ? num = vec3(st, 0.0) : num = vec3(0.0, st);
    // Now we have 9 spaces that go from 0-1

    // color = vec3(st, 0.0);
    // color = vec3(circle(st, 0.5));
    color = vec3(num);
    gl_FragColor = vec4(color, 1.0);
}