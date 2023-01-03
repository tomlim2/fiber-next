import ButtonBasic from "@/components/buttons/buttonBasic";
import { Title } from "@/components/texts/text";
import useModel, { modelManager } from "models";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
      <Section>
        <Title>exp-front</Title>
        <ul className="logs">
          {flfi.map((log: IWorkLogFlfi, index: number) => (
            <li key={index}>
              <Title>{log.name}</Title>
              <div>{log.description}</div>
              <div>{log.type}</div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default SectionExpLog;

export const Section = styled.section`
  .logs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

    .li {
    }
  }
`;
