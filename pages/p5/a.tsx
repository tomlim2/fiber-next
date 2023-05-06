import Head from "next/head";
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import sketch from 'sketches/sketch';

const P5Wrapper = dynamic(() => import('components/P5Wrapper'), { ssr: false });


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
      <h1>Next.js and p5.js with TypeScript</h1>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};

export default P5VectorField;