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

float random(vec2 st) {
    return fract(sin(dot(st.xy + uParamsA, vec2(12.9898, 78.233))) *
        43758.5453123);
}

void main() {
    vec2 st = vUv;
    st *= uParamsB; // Scale the coordinate system by 10
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    // Assign a random value based on the integer coord
    vec3 color = vec3(random(ipos));

    // Uncomment to see the subdivided grid
    // color = vec3(fpos,0.0);

    gl_FragColor = vec4(color, 1.0);
}