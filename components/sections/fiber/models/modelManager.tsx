import ModelA from "./modelList/modelA/index";
import ModelB from "./modelList/modelB/index";

const modelManager = [
  {
    info: "Model B: Model",
    component: <ModelB />,
  },
  {
    info: "Model A: Mesh",
    component: <ModelA />,
  },
];

export { modelManager };
