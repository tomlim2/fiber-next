#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

void main() {
    vec2 st = vUv;
    float pct = 0.0;

    // a. The DISTANCE from the pixel to the center
    // pct = distance(st, vec2(0.5));

    // b. The LENGTH of the vector
    //    from the pixel to the center
    // vec2 toCenter = vec2(0.5)-st;
    // pct = length(toCenter);

    // c. The SQUARE ROOT of the vector
    //    from the pixel to the center
    vec2 tC = vec2(0.5)-st;
    pct = sqrt(tC.x*tC.x+tC.y*tC.y);

    vec3 color = vec3(pct);

    gl_FragColor = vec4(color, 1.0);
}