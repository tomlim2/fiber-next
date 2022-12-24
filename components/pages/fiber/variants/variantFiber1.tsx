import WapperFiber from "components/pages/fiber/wrapperFiber";

interface Props {}

const VariantFiber1: React.FC<Props> = () => {
  return (
    <WapperFiber title="fiber1">
      <div></div>
    </WapperFiber>
  );
};

export default VariantFiber1;
