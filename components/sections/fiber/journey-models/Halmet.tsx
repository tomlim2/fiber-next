import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function Model() {
  //   const model = useLoader(
  // const model = useLoader(GLTFLoader, "/assets/models/hamburger.glb");
  // const model = useLoader(GLTFLoader, "/assets/models/hamburger.glb", (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("/assets/models/draco/");
  //   loader.setDRACOLoader(dracoLoader);
  // });

  const model = useLoader(
    GLTFLoader,
    "/assets/models/FlightHelmet/glTF/FlightHelmet.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/assets/models/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return <primitive object={model.scene} scale={5} position-y={-1} />;
}
