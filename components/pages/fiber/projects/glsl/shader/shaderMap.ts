import Pattern1Fragment from "raw-loader!glslify-loader!./pattern1/fragment.glsl";
import Pattern1Vertex from "raw-loader!glslify-loader!./pattern1/vertex.glsl";
import Pattern2Fragment from "raw-loader!glslify-loader!./pattern2/fragment.glsl";
import Pattern2Vertex from "raw-loader!glslify-loader!./pattern2/vertex.glsl";
import Pattern3Fragment from "raw-loader!glslify-loader!./pattern3/fragment.glsl";
import Pattern3Vertex from "raw-loader!glslify-loader!./pattern3/vertex.glsl";
import Pattern4Fragment from "raw-loader!glslify-loader!./pattern4/fragment.glsl";
import Pattern4Vertex from "raw-loader!glslify-loader!./pattern4/vertex.glsl";
import Pattern5Fragment from "raw-loader!glslify-loader!./pattern5/fragment.glsl";
import Pattern5Vertex from "raw-loader!glslify-loader!./pattern5/vertex.glsl";
import Pattern6Fragment from "raw-loader!glslify-loader!./pattern6/fragment.glsl";
import Pattern6Vertex from "raw-loader!glslify-loader!./pattern6/vertex.glsl";
import Pattern7Fragment from "raw-loader!glslify-loader!./pattern7/fragment.glsl";
import Pattern7Vertex from "raw-loader!glslify-loader!./pattern7/vertex.glsl";
import Pattern8Fragment from "raw-loader!glslify-loader!./pattern8/fragment.glsl";
import Pattern8Vertex from "raw-loader!glslify-loader!./pattern8/vertex.glsl";
import Pattern9Fragment from "raw-loader!glslify-loader!./pattern9/fragment.glsl";
import Pattern9Vertex from "raw-loader!glslify-loader!./pattern9/vertex.glsl";
import Pattern10Fragment from "raw-loader!glslify-loader!./pattern10/fragment.glsl";
import Pattern10Vertex from "raw-loader!glslify-loader!./pattern10/vertex.glsl";
import Pattern11Fragment from "raw-loader!glslify-loader!./pattern11/fragment.glsl";
import Pattern11Vertex from "raw-loader!glslify-loader!./pattern11/vertex.glsl";

export const shaderMap: ShaderMap[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex },
  { fragment: Pattern2Fragment, vertex: Pattern2Vertex },
  { fragment: Pattern3Fragment, vertex: Pattern3Vertex },
  { fragment: Pattern4Fragment, vertex: Pattern4Vertex },
  { fragment: Pattern5Fragment, vertex: Pattern5Vertex },
  { fragment: Pattern6Fragment, vertex: Pattern6Vertex },
  { fragment: Pattern7Fragment, vertex: Pattern7Vertex },
  { fragment: Pattern8Fragment, vertex: Pattern8Vertex },
  { fragment: Pattern9Fragment, vertex: Pattern9Vertex },
  { fragment: Pattern10Fragment, vertex: Pattern10Vertex },
  { fragment: Pattern11Fragment, vertex: Pattern11Vertex },
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
}
