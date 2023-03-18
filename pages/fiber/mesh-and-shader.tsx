import LayoutDefault from "layouts/layoutDefault";
import MeshNShader from "@/components/pages/fiber/MeshNShader";

const meshAndShader = () => {
  return (
    <div>
      <MeshNShader />
    </div>
  );
};

export default meshAndShader;

meshAndShader.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
