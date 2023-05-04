
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import sketch from 'sketches/sketch';

const P5Wrapper = dynamic(() => import('components/P5Wrapper'), { ssr: false });


const Home: NextPage = () => {
  return (
    <div>
      <h1>Next.js and p5.js with TypeScript</h1>
      <P5Wrapper sketch={sketch} />
      <P5Wrapper sketch={sketch} />
    </div>
  );
};

export default Home;