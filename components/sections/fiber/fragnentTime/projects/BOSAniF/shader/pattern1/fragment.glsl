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
    float currentSecond = floor(uTime);

    st *= 40.;

    float row = floor(st.y);
    float timeOffsetX = mod(currentSecond, 2.0) == 0.0 ? 0.0 : floor(uTime*10.)/10.;

    float column = floor(st.x);
    float timeOffsetY = mod(currentSecond, 2.0) == 1.0 ? 0.0 : floor(uTime*10.)/10.;

    mod(row, 2.0) == 0.0 ? st.x += timeOffsetX : st.x += 1.0 - timeOffsetX;
    mod(column, 2.0) == 0.0 ? st.y += timeOffsetY : st.y += 1.0 - timeOffsetY;

    st = fract(st);
    color = vec3(circle(st,0.1));

	gl_FragColor = vec4(color,1.0);
}