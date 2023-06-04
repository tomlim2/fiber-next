export interface IShaderSet {
  fragment: string;
  vertex: string;
}

export interface IShaderSetWithName extends IShaderSet {
  name: string;
}

export interface IFVector2 {
  x: number;
  y: number;
}
