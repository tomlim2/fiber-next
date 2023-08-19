import Common from "raw-loader!glslify-loader!./common.glsl";
import Vertex from "raw-loader!glslify-loader!./vertex.glsl";
import type { IShaderSet } from "@/types/fiber";

export const shaders: any[] = [{ common: Common, vertex: Vertex }];
