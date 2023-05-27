varying vec2 vUv;
uniform float uParamsA;
uniform float uParamsB;
uniform float uParamsC;
uniform float uTime;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float elevation = sin(uTime + modelPosition.x * uParamsB) * sin(uTime + modelPosition.z * uParamsC) * uParamsA;
    modelPosition.y += elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vUv = uv;
}