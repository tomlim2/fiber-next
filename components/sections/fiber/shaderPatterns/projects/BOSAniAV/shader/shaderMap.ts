import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import type { IFShaderSet } from "types/fiber";

export const shaderMap: IFShaderSet[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: '2D random'},
];