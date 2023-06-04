import Fragment from "raw-loader!glslify-loader!./fragment.glsl";
import Vertex from "raw-loader!glslify-loader!./vertex.glsl";
import type { IShaderSet } from "@/types/fiber";

export const shaders: IShaderSet[] = [
  { fragment: Fragment, vertex: Vertex, name: "2D random" },
];
