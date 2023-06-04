#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(abs(sin(uTime)), mouseY, mouseX, 1.0);
}