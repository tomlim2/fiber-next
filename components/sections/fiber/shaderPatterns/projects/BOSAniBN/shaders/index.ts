import FragmentShader from "raw-loader!glslify-loader!./fragment.glsl";
import VertexShader from "raw-loader!glslify-loader!./vertex.glsl";

import type { IShaderSet } from "types/fiber";

export const shaderMap: IShaderSet[] = [
  { fragment: FragmentShader, vertex: VertexShader, name: "2D random" },
];
