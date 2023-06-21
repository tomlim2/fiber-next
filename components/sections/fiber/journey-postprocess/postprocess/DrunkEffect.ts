import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
    void mainUv(inout vec2 uv)
    {
        uv.x += sin(uv.x * 10.0) * 0.1;
        uv.y += sin(uv.x * 10.0) * 0.1;
    }
    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
    {
      vec4 color = inputColor;
      color.rgb *= vec3(0.8, 1.0, 0.5);

      outputColor = color;
    }
`;

export default class DrunkEffect extends Effect {
  constructor(props: any) {
    super("DrunkEffect", fragmentShader, {});
  }
}
