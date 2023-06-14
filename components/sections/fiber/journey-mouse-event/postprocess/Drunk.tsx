import { forwardRef } from "react";
import DrunkEffect from "./DrunkEffect";

export default forwardRef(function Drunk(props: any, ref: any) {
  const effect = new DrunkEffect(props);
  return <primitive ref={ref} object={effect} />;
});
