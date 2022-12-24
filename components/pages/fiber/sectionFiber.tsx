import styles from "styles/components/sections/sectionHome.module.scss";
import VariantFiber1 from "components/pages/fiber/variants/variantFiber1";

const SectionFiber = () => {
  return (
    <section className={`${styles.section} ${styles.summary}`}>
      <VariantFiber1 />
    </section>
  );
};

export default SectionFiber;
