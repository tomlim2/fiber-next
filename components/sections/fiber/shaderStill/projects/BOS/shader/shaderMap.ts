import type { IShaderSet } from "types/fiber";

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

export const shaderMap: IShaderSet[] = [
  { fragment: Pattern1Fragment, vertex: Pattern1Vertex, name: "2D random" },
  { fragment: Pattern2Fragment, vertex: Pattern2Vertex, name: "Mosaic" },
  { fragment: Pattern3Fragment, vertex: Pattern3Vertex, name: "UV" },
  { fragment: Pattern4Fragment, vertex: Pattern4Vertex, name: "Pow" },
  { fragment: Pattern5Fragment, vertex: Pattern5Vertex, name: "Step" },
  { fragment: Pattern6Fragment, vertex: Pattern6Vertex, name: "Smoothstep" },
  {
    fragment: Pattern7Fragment,
    vertex: Pattern7Vertex,
    name: "Blinn-Wyvill Approximation to the Raised Inverted Cosine",
  },
  { fragment: Pattern8Fragment, vertex: Pattern8Vertex, name: "Cubic Bezier" },
  { fragment: Pattern9Fragment, vertex: Pattern9Vertex, name: "Cubic Puls" },
  {
    fragment: Pattern10Fragment,
    vertex: Pattern10Vertex,
    name: "Circular EaseIn",
  },
  { fragment: Pattern11Fragment, vertex: Pattern11Vertex, name: "patriciogv" },
  { fragment: Pattern12Fragment, vertex: Pattern12Vertex, name: "normalized" },
  {
    fragment: Pattern13Fragment,
    vertex: Pattern13Vertex,
    name: "Apply matrices",
  },
  {
    fragment: Pattern14Fragment,
    vertex: Pattern14Vertex,
    name: "Offset patterns",
  },
  {
    fragment: Pattern15Fragment,
    vertex: Pattern15Vertex,
    name: "Truchet Tiles",
  },
  { fragment: Pattern16Fragment, vertex: Pattern16Vertex, name: "YUV color" },
  {
    fragment: Pattern17Fragment,
    vertex: Pattern17Vertex,
    name: "Distance Field",
  },
  {
    fragment: Pattern18Fragment,
    vertex: Pattern18Vertex,
    name: "Polar shapes",
  },
  { fragment: Pattern19Fragment, vertex: Pattern19Vertex, name: "Truchet" },
  { fragment: Pattern20Fragment, vertex: Pattern20Vertex, name: "2D Noise" },
  { fragment: Pattern21Fragment, vertex: Pattern21Vertex, name: "4 cells DF" },
  {
    fragment: Pattern22Fragment,
    vertex: Pattern22Vertex,
    name: "Test cells DF",
  },
  { fragment: Pattern23Fragment, vertex: Pattern23Vertex, name: "Test cells" },
];
