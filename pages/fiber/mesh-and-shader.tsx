import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import MeshAndShader from "@/components/sections/fiber/meshNShader";

const meshAndShader = () => {
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
      <MeshAndShader />
    </div>
  );
};

export default meshAndShader;

meshAndShader.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
