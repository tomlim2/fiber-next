import LayoutDefault from "layouts/layoutDefault";
import MeshAndShader from "@/components/pages/fiber/meshNShader";

const meshAndShader = () => {
  return (
    <div>
      <MeshAndShader />
    </div>
  );
};

export default meshAndShader;

meshAndShader.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
