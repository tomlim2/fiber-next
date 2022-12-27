import ButtonBasic from "@/components/buttons/buttonBasic";
import Title from "@/components/texts/title";
import useModel, { modelManager } from "models";
import { useEffect, useState } from "react";

import type { IWorkLogFlfi } from "types/api";

const SectionExpLog = () => {
  const [flfi, setFlfi] = useState([]);
  const model = useModel();

  const getFlfiLog = async (model: modelManager) => {
    const params = "flfi";
    const res = await model.exps.getWorkLog(params);
    setFlfi(res);
  };

  useEffect(() => {
    getFlfiLog(model);
  }, [model]);

  return (
    <>
      <section>
        <Title>exp-front</Title>
        <ul>
          {flfi.map((log: IWorkLogFlfi, index: number) => (
            <li key={index}>
              <Title>{log.name}</Title>
              <div>{log.type}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SectionExpLog;
