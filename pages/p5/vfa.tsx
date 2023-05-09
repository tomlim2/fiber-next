import Head from "next/head";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import sketchVectorFields from "sketches/vectorFields/sketchVectorFields";

const P5Wrapper = dynamic(() => import("components/P5Wrapper"), { ssr: false });

const P5VectorField: NextPage = () => {
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
      <h3>Next.js and p5.js with TypeScript</h3>
    </div>
  );
};

export default P5VectorField;
