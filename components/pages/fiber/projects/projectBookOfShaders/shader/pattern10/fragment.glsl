varying vec2 vUv;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

float circularEaseIn (float x){
  float y = 1. - sqrt(1. - x*x);
  return y;
}

void main() {
    float strength = circularEaseIn(vUv.x);
    vec3 color = vec3(strength);
    float pct = plot(vUv, strength);

    color = (1.0 - pct) * color + pct * vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}