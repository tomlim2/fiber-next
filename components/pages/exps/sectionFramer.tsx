import Footer from "https://framer.com/m/Footer-lT70.js@xa2iNPv4qQPapK7RgOgQ";

import { Title } from "styles/text";
import { useEffect, useState } from "react";

const SectionFramer = () => {
  const [variant, setVariant] = useState("Desktop");

  const dectectWindow = () => {
    if (window.innerWidth < 680) {
      setVariant("Phone");
    } else {
      setVariant("Desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", dectectWindow);
  }, []);

  return (
    <section>
      <Title usage="section">Framer</Title>

      <Footer variant={variant} />
    </section>
  );
};

export default SectionFramer;
