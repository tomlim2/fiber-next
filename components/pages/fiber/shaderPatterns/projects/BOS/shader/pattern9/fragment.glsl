varying vec2 vUv;

float cubicPulse( float c, float w, float x ){
    x = abs(x - c);
    if( x>w ) return 0.0;
    x /= w;
    return 1.0 - x*x*(3.0-2.0*x);
}

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    float strength = cubicPulse(.5,.2,vUv.x);
    vec3 color = vec3(strength);
    float pct = plot(vUv, strength);

    color = (1.0 - pct) * color + pct * vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}