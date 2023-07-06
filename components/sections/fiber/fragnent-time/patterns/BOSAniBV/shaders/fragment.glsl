precision highp float;
uniform vec2 u_resolution;  // Width and height of the shader
uniform float u_time;  // Time elapsed

// Constants
#define PI 3.1415925359
#define TWO_PI 6.2831852
#define MAX_STEPS 100
#define MAX_DIST 100.
#define SURFACE_DIST .01

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

float GetDist(vec3 p) {
    vec4 s = vec4(0, 1, 6. + sin(u_time) * 3., 1); //Sphere. xyz is position w is radius
    float sphereDist = length(p - s.xyz) - s.w;
    float planeDist = p.y;
    float d = min(sphereDist, planeDist);

    return d;
}

float RayMarch(vec3 ro, vec3 rd) {
    float dO = 0.; //Distane Origin
    for(int i = 0 ; i < MAX_STEPS ; i++) {
        vec3 p = ro + rd * dO;
        float ds = GetDist(p); // ds is Distance Scene
        dO += ds;
        if(dO > MAX_DIST || ds < SURFACE_DIST)
            break;
    }
    return dO;
}

void main() {
    // vec3 st = cameraPosition;
    // st = step(1., st);
    vec2 uv = vUv * 2. - 1.;
    vec3 ro = vec3(uParamsB, uParamsC, uParamsD); // Ray Origin/ Camera
    vec3 rd = normalize(vec3(uv.x, uv.y, 1));
    float d = RayMarch(ro, rd); // Distance
    d /= uParamsA;
    vec3 color = vec3(d);

    // Set the output color
    gl_FragColor = vec4(color, 1.0);
}