#define PI 3.14159265358979323846

varying vec2 vUv;
uniform float uTime;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec2 st = vUv;
    st *= vec2(100.,1.0); // Scale the coordinate system by 10
    float row = floor(st.y * 2.);
    float speed = 20.0;
    float timeOffsetX = floor(uTime * 5.)/5.;
    row == 0.0 ? st.x += timeOffsetX * speed : st.x += 1.0 - timeOffsetX * speed;
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    // Assign a random value based on the integer coord
    

    vec3 color = vec3(random( ipos ));
    color = step(.2,color);
    // Uncomment to see the subdivided grid
    // color = vec3(fpos,0.0);

    gl_FragColor = vec4(color,1.0);
}