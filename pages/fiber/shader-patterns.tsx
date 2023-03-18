import LayoutDefault from "layouts/layoutDefault";
import MeshoNShader from "@/components/pages/fiber/shaderPatterns";

const ShaderPatterns = () => {
  return (
    <div>
      <MeshoNShader />
    </div>
  );
};

export default ShaderPatterns;

ShaderPatterns.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
