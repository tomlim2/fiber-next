varying vec2 vUv;
uniform float uTime;

#define PI 3.14159265359

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

// Plot a line on Y using a value between 0.0-1.0
float box(in vec2 _st, in vec2 _size){
    _size = vec2(0.5) - _size*0.5;
    vec2 uv = smoothstep(_size, _size+vec2(0.001), _st);
    uv *= smoothstep(_size, _size+vec2(0.001), vec2(1.0)-_st);
    return uv.x * uv.y;
}

float crossBox(in vec2 _st, float _size){
    return  box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size));
}

void main() {
    vec2 strength = vUv;
    vec3 color = vec3(0.0);
    
    // move space from the center to the vec2(0.0)
    strength -= vec2(0.5);
    // rotate the space
    strength = rotate2d( sin(uTime) * PI ) * strength;
    // move it back to the original place
    strength += vec2(0.5);

    // Show the coordinates of the space on the background
    // color = vec3(strength.x,strength.y,0.0);

    // Add the shape on the foreground

    color += vec3(crossBox(strength,0.25));

    gl_FragColor = vec4(color,1.0);
}