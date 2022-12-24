import Layout from "layouts/layout";
import SectionFiber from "@/components/pages/fiber/sectionFiber";

const Fiber = () => {
  return (
    <main>
      <SectionFiber />
    </main>
  );
};

export default Fiber;

Fiber.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
