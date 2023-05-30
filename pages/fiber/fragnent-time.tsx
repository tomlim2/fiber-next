import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import MeshoNShader from "@/components/sections/fiber/fragnentTime";

const ShaderPatterns = () => {
  const pageHeadData = (
    <Head>
      <title>Fiber | Shader Time | yslim</title>
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
