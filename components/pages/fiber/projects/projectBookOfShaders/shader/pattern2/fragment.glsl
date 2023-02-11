varying vec2 vUv;
uniform vec2 uResolution;
uniform vec2 uDimension;
uniform float uWidth;
uniform float uHeight;
uniform float uScale;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
        vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec2 strength = vUv;

    strength *= 10.; // Scale the coordinate system by 10
    vec2 ipos = floor(strength);  // get the integer coords

    // Assign a random value based on the integer coord
    vec3 color = vec3(random( ipos ));

    gl_FragColor = vec4(color,1.0);
}