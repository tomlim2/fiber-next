import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";

export const shaderMap: ShaderSet[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: '2D random'},
];

export interface ShaderSet {
  fragment: string;
  vertex: string;
  name: string;
}