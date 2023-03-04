import LayoutDefault from "layouts/layoutDefault";
import SectionFiber from "@/components/pages/fiber/shaderPatterns/sectionShaderPatterns";

const ShaderPatterns = () => {
  return (
    <div>
      <SectionFiber />
    </div>
  );
};

export default ShaderPatterns;

ShaderPatterns.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
