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

export const shaderMap: ShaderMap[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: '2D random'},
  { fragment: Pattern2Fragment, vertex: Pattern2Vertex, name: 'Mosaic' },
  { fragment: Pattern3Fragment, vertex: Pattern3Vertex, name: 'UV'},
  { fragment: Pattern4Fragment, vertex: Pattern4Vertex, name: 'Pow'},
  { fragment: Pattern5Fragment, vertex: Pattern5Vertex, name: 'Step'},
  { fragment: Pattern6Fragment, vertex: Pattern6Vertex, name: 'Smoothstep'},
  { fragment: Pattern7Fragment, vertex: Pattern7Vertex, name: 'Blinn-Wyvill Approximation to the Raised Inverted Cosine'},
  { fragment: Pattern8Fragment, vertex: Pattern8Vertex, name: 'Blinn-Wyvill Approximation to the Raised Inverted Cosine'},
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
  name: string;
}
