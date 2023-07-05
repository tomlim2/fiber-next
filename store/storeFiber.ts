import { atom } from "recoil";

export const currentShaderIndex = atom({
  key: "currentShaderIndex",
  default: 0,
});

export const currentWeather = atom({
  key: "currentWeather",
  default: "#252525",
});
