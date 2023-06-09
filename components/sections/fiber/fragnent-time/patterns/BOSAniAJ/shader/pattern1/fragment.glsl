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

    st *= 2.0; // Scale up the space by 3
    if(mod(floor(st.x), 2.) == 0.) {
        st.y += uTime;
    } else {
        st.y += - uTime;
    }
    st = fract(st);
    color = vec3(st, 1.0);

    gl_FragColor = vec4(color, 1.0);
}