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
import Pattern12Fragment from "raw-loader!glslify-loader!./pattern12/fragment.glsl";
import Pattern12Vertex from "raw-loader!glslify-loader!./pattern12/vertex.glsl";
import Pattern13Fragment from "raw-loader!glslify-loader!./pattern13/fragment.glsl";
import Pattern13Vertex from "raw-loader!glslify-loader!./pattern13/vertex.glsl";
import Pattern14Fragment from "raw-loader!glslify-loader!./pattern14/fragment.glsl";
import Pattern14Vertex from "raw-loader!glslify-loader!./pattern14/vertex.glsl";
import Pattern15Fragment from "raw-loader!glslify-loader!./pattern15/fragment.glsl";
import Pattern15Vertex from "raw-loader!glslify-loader!./pattern15/vertex.glsl";
import Pattern16Fragment from "raw-loader!glslify-loader!./pattern16/fragment.glsl";
import Pattern16Vertex from "raw-loader!glslify-loader!./pattern16/vertex.glsl";
import Pattern17Fragment from "raw-loader!glslify-loader!./pattern17/fragment.glsl";
import Pattern17Vertex from "raw-loader!glslify-loader!./pattern17/vertex.glsl";
import Pattern18Fragment from "raw-loader!glslify-loader!./pattern18/fragment.glsl";
import Pattern18Vertex from "raw-loader!glslify-loader!./pattern18/vertex.glsl";
import Pattern19Fragment from "raw-loader!glslify-loader!./pattern19/fragment.glsl";
import Pattern19Vertex from "raw-loader!glslify-loader!./pattern19/vertex.glsl";
import Pattern20Fragment from "raw-loader!glslify-loader!./pattern20/fragment.glsl";
import Pattern20Vertex from "raw-loader!glslify-loader!./pattern20/vertex.glsl";
import Pattern21Fragment from "raw-loader!glslify-loader!./pattern21/fragment.glsl";
import Pattern21Vertex from "raw-loader!glslify-loader!./pattern21/vertex.glsl";
import Pattern22Fragment from "raw-loader!glslify-loader!./pattern22/fragment.glsl";
import Pattern22Vertex from "raw-loader!glslify-loader!./pattern22/vertex.glsl";
import Pattern23Fragment from "raw-loader!glslify-loader!./pattern23/fragment.glsl";
import Pattern23Vertex from "raw-loader!glslify-loader!./pattern23/vertex.glsl";
import Pattern24Fragment from "raw-loader!glslify-loader!./pattern24/fragment.glsl";
import Pattern24Vertex from "raw-loader!glslify-loader!./pattern24/vertex.glsl";
import Pattern25Fragment from "raw-loader!glslify-loader!./pattern25/fragment.glsl";
import Pattern25Vertex from "raw-loader!glslify-loader!./pattern25/vertex.glsl";
import Pattern26Fragment from "raw-loader!glslify-loader!./pattern26/fragment.glsl";
import Pattern26Vertex from "raw-loader!glslify-loader!./pattern26/vertex.glsl";
import Pattern27Fragment from "raw-loader!glslify-loader!./pattern27/fragment.glsl";
import Pattern27Vertex from "raw-loader!glslify-loader!./pattern27/vertex.glsl";
import Pattern28Fragment from "raw-loader!glslify-loader!./pattern28/fragment.glsl";
import Pattern28Vertex from "raw-loader!glslify-loader!./pattern28/vertex.glsl";

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
  { fragment: Pattern12Fragment, vertex: Pattern12Vertex },
  { fragment: Pattern13Fragment, vertex: Pattern13Vertex },
  { fragment: Pattern14Fragment, vertex: Pattern14Vertex },
  { fragment: Pattern15Fragment, vertex: Pattern15Vertex },
  { fragment: Pattern16Fragment, vertex: Pattern16Vertex },
  { fragment: Pattern17Fragment, vertex: Pattern17Vertex },
  { fragment: Pattern18Fragment, vertex: Pattern18Vertex },
  { fragment: Pattern19Fragment, vertex: Pattern19Vertex },
  { fragment: Pattern20Fragment, vertex: Pattern20Vertex },
  { fragment: Pattern21Fragment, vertex: Pattern21Vertex },
  { fragment: Pattern22Fragment, vertex: Pattern22Vertex },
  { fragment: Pattern23Fragment, vertex: Pattern23Vertex },
  { fragment: Pattern24Fragment, vertex: Pattern24Vertex },
  { fragment: Pattern25Fragment, vertex: Pattern25Vertex },
  { fragment: Pattern26Fragment, vertex: Pattern26Vertex },
  { fragment: Pattern27Fragment, vertex: Pattern27Vertex },
  { fragment: Pattern28Fragment, vertex: Pattern28Vertex },
];

export interface ShaderMap {
  fragment: string;
  vertex: string;
}
