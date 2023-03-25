import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import MeshoNShader from "@/components/pages/fiber/shaderPatterns";

const ShaderPatterns = () => {
  const pageHeadData = (
    <Head>
      <title>Fiber | Shader Patterns | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Welcome!" />
    </Head>
  );
  return (
    <div>
      {pageHeadData}
      <MeshoNShader />
    </div>
  );
};

export default ShaderPatterns;

ShaderPatterns.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
