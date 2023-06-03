varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/vUv;

    float rnd = random( st );

    gl_FragColor = vec4(vec3(rnd),1.0);
}