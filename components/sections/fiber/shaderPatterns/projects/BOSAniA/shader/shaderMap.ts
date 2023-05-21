import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import type { IShaderSet } from "types/fiber";

export const shaderMap: IShaderSet[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: '2D random'},
];