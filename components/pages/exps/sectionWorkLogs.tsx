import modelManager from "models";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { Title } from "styles/text";

import type { IWorkLogFlfi } from "types/api";

const SectionExpLog = () => {
  useEffect(() => {
    const model = modelManager();
    const getFlfiLog = async () => {
      const params = "flfi";
      const res = await model.exps.getWorkLog(params);
      setFlfi(res);
    };
    getFlfiLog();
  }, []);

  const [flfi, setFlfi] = useState([]);

  return (
    <>
      <Section>
        <Title usage="section">logs</Title>
        <div>
          <Title usage="list">Flfi</Title>
          <ul className="logs">
            {flfi.map((log: IWorkLogFlfi, index: number) => (
              <li key={index}>
                <Title>{log.name}</Title>
                <div>{log.description}</div>
                <div>{log.type}</div>
              </li>
            ))}
          </ul>
        </div>
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
