import Test1Fragment from "raw-loader!glslify-loader!./test1/fragment.glsl";
import Test1Vertex from "raw-loader!glslify-loader!./test1/vertex.glsl";
import Test2Fragment from "raw-loader!glslify-loader!./test2/fragment.glsl";
import Test2Vertex from "raw-loader!glslify-loader!./test2/vertex.glsl";

export const shaderMap: ShaderMap[] = [
  { fragment: Test1Fragment, vertex: Test1Vertex },
  { fragment: Test2Fragment, vertex: Test2Vertex },
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
}
