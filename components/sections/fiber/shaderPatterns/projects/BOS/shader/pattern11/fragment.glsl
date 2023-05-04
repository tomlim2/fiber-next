varying vec2 vUv;
uniform float uTime;
// Plot a line on Y using a value between 0.0-1.0
float box(in vec2 _st, in vec2 _size){
    _size = vec2(0.5) - _size*0.5;
    vec2 uv = smoothstep(_size, _size+vec2(0.001), _st);
    uv *= smoothstep(_size, _size+vec2(0.001), vec2(1.0)-_st);
    return uv.x*uv.y;
}

float crossBox(in vec2 _st, float _size){
    return  box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size));
}

void main() {
    vec2 st = vUv;
    vec3 color = vec3(0.0);
    
    vec2 translate = vec2(cos(uTime),sin(uTime));
    st += translate*0.35;

    color += vec3(crossBox(st,0.25));

    gl_FragColor = vec4(color,1.0);
}