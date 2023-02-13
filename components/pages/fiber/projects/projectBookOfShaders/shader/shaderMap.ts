import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import Pattern2Fragment from "raw-loader!glslify-loader!./pattern2/fragment.glsl";
import Pattern2Vertex from "raw-loader!glslify-loader!./pattern2/vertex.glsl";
import Pattern3Fragment from "raw-loader!glslify-loader!./pattern3/fragment.glsl";
import Pattern3Vertex from "raw-loader!glslify-loader!./pattern3/vertex.glsl";

export const shaderMap: ShaderMap[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: '2D random'},
  { fragment: Pattern2Fragment, vertex: Pattern2Vertex, name: 'Mosaic' },
  { fragment: Pattern3Fragment, vertex: Pattern3Vertex, name: 'Algorithmic drawing 1'},
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
  name: string;
}
