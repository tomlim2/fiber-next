#ifdef GL_ES
precision mediump float;
#endif

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
varying vec3 vNormal;

void main() {
    // vec3 st = cameraPosition;
    // st = step(1., st);
    vec2 uv = vUv;
    vec3 color = vec3(1.);
    vec3 normal = vNormal;

    color = mix(color, vec3(uv, 1.), step(1., -normal.x));
    color = mix(color, vec3(uv, 1.), step(1., normal.x));

    color = mix(color, vec3(uv.y, 1., uv.x), step(1., normal.y));
    color = mix(color, vec3(uv.y, 1., uv.x), step(1., -normal.y));

    color = mix(color, vec3(1., uv), step(1., normal.z));
    color = mix(color, vec3(1., uv), step(1., -normal.z));
    // if(normal.x < 0. || normal.x > 0.) {
    //     color = vec3(uv, 1.);
    // }
    // if(normal.y < 0. || normal.y > 0.) {
    //     color = vec3(uv.y, 1., uv.x);
    // }
    // if(normal.z < 0. || normal.z > 0.) {
    //     color = vec3(1., uv);
    // }
    gl_FragColor = vec4(color, 1.);
}