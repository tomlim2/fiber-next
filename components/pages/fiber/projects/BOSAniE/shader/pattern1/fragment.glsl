#define PI 3.14159265358979323846

varying vec2 vUv;
uniform float uTime;

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    
    return smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(l,l)*4.0);
}

void main (void) {
    vec2 st = vUv;
    vec3 color = vec3(0.0);

    st *= 10.;      // Scale up the space by 3
    // st.x += step(1., mod(st.y,2.0)) * uTime;
    st.y += step(1., mod(st.x,2.)) * (floor(uTime*5.0)/5.0);
    // st.y += step(1., mod(st.x,2.0)) * 0.5 * uTime;
    st = fract(st); // Wrap around 1.0
    // st = mod(st,1.0); // Wrap around 1.0

    // Now we have 9 spaces that go from 0-1
    // color = vec3(st,0.0);
    color = vec3(circle(st,0.2));

	gl_FragColor = vec4(color,1.0);
}