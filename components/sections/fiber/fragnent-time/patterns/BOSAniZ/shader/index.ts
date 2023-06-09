import ShaderFragment from "raw-loader!glslify-loader!./fragment.glsl";
import ShaderVertex from "raw-loader!glslify-loader!./vertex.glsl";
import type { IShaderSet } from "@/types/fiber";

export const shaderMap: IShaderSet[] = [
  { fragment: ShaderFragment, vertex: ShaderVertex },
];
