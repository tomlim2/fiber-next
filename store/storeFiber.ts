import { atom } from "recoil";

export const currentShaderIndex = atom({
  key: "currentShaderIndex",
  default: 0,
});

export const isCurrentShader = atom({
  key: "isCurrentShader",
  default: false,
});
