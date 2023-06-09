import ShaderFragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import ShaderVertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import type { IShaderSet } from "@/types/fiber";

export const shaderMap: IShaderSet[] = [
  { fragment: ShaderFragment, vertex: ShaderVertex},
];

