import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import sketchVectorFields from "sketches/vectorFields/sketchVectorFields";

import dynamic from "next/dynamic";

const P5Wrapper = dynamic(() => import("components/P5Wrapper"), { ssr: false });

const P5VectorField = () => {
  const pageHeadData = (
    <Head>
      <title>P5 | Vector Field | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Works about p5" />
    </Head>
  );

  return (
    <div>
      {pageHeadData}
      <P5Wrapper sketch={sketchVectorFields} />
    </div>
  );
};

export default P5VectorField;

P5VectorField.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
