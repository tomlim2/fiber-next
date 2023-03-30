#define PI 3.14159265358979323846

uniform float uWidth;
uniform float uHeight;

uniform float uTime;
uniform float mouseX;
uniform float mouseY;

varying vec2 vUv;

void main() {
    vec2 st = vUv;
    float pct = .00001;

    // a. The DISTANCE from the pixel to the center
    // pct = distance(st, vec2(0.5));

    // b. The LENGTH of the vector
    //    from the pixel to the center
    // vec2 toCenter = vec2(0.5)-st;
    // pct = length(toCenter);

    // c. The SQUARE ROOT of the vector
    //    from the pixel to the center
    // vec2 tC = vec2(0.5) - st;
    // pct = sqrt(tC.x * tC.x + tC.y * tC.y);
    // pct = 1. - step(.2, pct);
    // pct = distance(st, vec2(0.4)) + distance(st, vec2(mouseX, mouseY));
    // pct = distance(st, vec2(0.4)) * distance(st, vec2(0.6));
    // pct = min(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
    // pct = max(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
    // pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    vec2 point1 = vec2(.4);
    vec2 point2 = vec2(.6);
    vec2 point3 = vec2(mouseX, mouseY);
    pct = pow(pct, distance(st, point1));
    pct = pow(pct, distance(st, point2));
    pct = pow(pct, distance(st, point3));
    
    vec3 color = vec3(pct);

    gl_FragColor = vec4(color, 1.0);
}