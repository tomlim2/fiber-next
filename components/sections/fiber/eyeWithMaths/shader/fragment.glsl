precision highp float;
uniform vec2 u_resolution;  // Width and height of the shader
uniform float u_time;  // Time elapsed

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
varying vec3 vNormalz;

#define EPSILON 0.0001
#define steps 1024

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f * f * (3.0 - 2.0 * f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}
mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p);
    p *= m * 2.02;
    f += 0.2500 * noise(p);
    p *= m * 2.03;
    f += 0.1250 * noise(p);
    p *= m * 2.01;
    f += 0.0625 * noise(p);
    p *= m * 2.04;
    f /= 0.9375;
    return f;
}
void main() {
    vec2 uv = vUv * 2. - 1.;
    // float background = smoothstep(-0.25, 0.25, uv.x);
    // float f = fbm(4.0 * uv);
    float r = sqrt(dot(uv, uv));
    float a = atan(uv.x, uv.y);
    vec3 color = vec3(1.0);

    float ss = 0.5 + 0.5 * sin(1.0 * uTime);
    float anim = 1.0 + 0.1 * ss * clamp(1.0 - r, 0.0, 1.0);
    r *= anim;

    if(r < 0.8) {
        color = vec3(0.2, 0.3, 0.4);
        float f = fbm(5.0 * uv);
        color = mix(color, vec3(0.2, 0.5, 0.4), f);

        f = 1.0 - smoothstep(0.2, 0.5, r);
        color = mix(color, vec3(0.9, 0.4, 0.2), f);

        a += 0.05 * fbm(20.0 * uv);

        f = smoothstep(.3, 1.0, fbm(vec2(6.0 * r, 20.0 * a)));
        color = mix(color, vec3(1.0), f);

        f = smoothstep(0.4, 0.9, fbm(vec2(10.0 * r, 15.0 * a)));
        color *= 1.0 - 0.5 * f;

        f = smoothstep(0.6, 0.8, r);
        color *= 1.0 - 0.5 * f;

        f = smoothstep(0.2, 0.25, r);
        color *= f;

        f = 1.0 - smoothstep(0.0, 0.5, length(uv - vec2(0.24, 0.2)));
        color += vec3(1.0, 0.9, 0.8) * f * 0.9;
    }

    float opacity = 1.0;
    gl_FragColor = vec4(color, opacity);
}