import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import Pattern2Fragment from "raw-loader!glslify-loader!./pattern2/fragment.glsl";
import Pattern2Vertex from "raw-loader!glslify-loader!./pattern2/vertex.glsl";
import Pattern3Fragment from "raw-loader!glslify-loader!./pattern3/fragment.glsl";
import Pattern3Vertex from "raw-loader!glslify-loader!./pattern3/vertex.glsl";
import Pattern4Fragment from "raw-loader!glslify-loader!./pattern4/fragment.glsl";
import Pattern4Vertex from "raw-loader!glslify-loader!./pattern4/vertex.glsl";

export const shaderMap: ShaderMap[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex },
  { fragment: Pattern2Fragment, vertex: Pattern2Vertex },
  { fragment: Pattern3Fragment, vertex: Pattern3Vertex },
  { fragment: Pattern4Fragment, vertex: Pattern4Vertex },
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
}
