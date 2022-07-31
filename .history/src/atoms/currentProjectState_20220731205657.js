import { atom } from "recoil";

export const currentProjectState = atom({
  key: "currentProjectState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});