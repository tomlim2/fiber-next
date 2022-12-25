import LayoutDefault from "layouts/layoutDefault";
import SectionFiber from "@/components/pages/fiber/sectionFiber";

const Fiber = () => {
  return (
    <div>
      <SectionFiber />
    </div>
  );
};

export default Fiber;

Fiber.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
