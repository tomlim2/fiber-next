varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
        vec2(12.9898,78.233)))*
        43758.5453123);
}

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 strength) {    
    return smoothstep(0.01, 0.0, abs(strength.y - strength.x));
}

void main() {
    float strength = vUv.x;
    vec3 color = vec3(strength);

    float pct = plot(vUv);
    color = (1.0-pct) * color + pct * vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}