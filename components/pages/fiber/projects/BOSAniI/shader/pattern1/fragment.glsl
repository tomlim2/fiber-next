#define PI 3.14159265358979323846

varying vec2 vUv;
uniform float uTime;

float random (vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main() {
    vec2 st = vUv;
    float uTimeWithOffset = uTime + 10.;
    float timing = uTimeWithOffset;
    float uTimeLayeredA = fract(sin(timing)*cos(timing));
    float speed =  10.;
    float scaleU = 50.+1.*floor(uTimeLayeredA);
    float stepRate = 0.1;

    vec2 scaleUv = vec2(scaleU,1.);

    st *= scaleUv;

    float framerate = 2.;
    float timeOffsetX = floor((timing + uTimeLayeredA) * speed / framerate) * framerate;
    float row = floor(st.y*2.);

    row == 0.0 ? st.x += timeOffsetX : st.x += - timeOffsetX;

    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    // Assign a random value based on the integer coord
    
    float generatedShape = random( ipos );
    vec3 color = vec3(generatedShape);

    color = step(stepRate,color);
    // Uncomment to see the subdivided grid
    // color = vec3(fpos,0.0);

    gl_FragColor = vec4(color,1.0);
}