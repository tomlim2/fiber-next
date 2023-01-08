import modelManager from "models";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { Title } from "styles/text";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";
import type { IWorkLogFlfi } from "types/api";

interface ISectionPropsExtend extends ISectionProps {
  data: any;
}

const SectionExpLog: React.FC<ISectionPropsExtend> = ({ backgroundColor, color, data }) => {
  const sectionStyles = { backgroundColor, color };

  // useEffect(() => {
  //   const model = modelManager();
  //   const getFlfiLog = async () => {
  //     const params = "flfi";
  //     const res = await model.exps.getWorkLog(params);
  //     setFlfi(res);
  //   };
  //   getFlfiLog();
  // }, []);

  // const [flfi, setFlfi] = useState([]);

  return (
    <>
      <SectionExtend sectionStyles={sectionStyles}>
        <Title usage="section">logs</Title>
        <div className="content">
          <Title usage="content">Flfi</Title>
          <ul className="logs">
            {data.flfi.map((log: IWorkLogFlfi, index: number) => (
              <li key={index}>
                <Title usage="list">{log.name}</Title>
                <div>{log.description}</div>
                <div>{log.type}</div>
                <div>{log.duration}</div>
                <ul>
                  <Title>Tech Stack</Title>
                  {log.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <ul>
                  <Title>Tasks</Title>
                  {log.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                <ul>
                  <Title>Advantures</Title>
                  {log.advantures.map((achivement, index) => (
                    <li key={index}>{achivement}</li>
                  ))}
                </ul>
                <ul>
                  <Title>Todo</Title>
                  {log.needTodos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </SectionExtend>
    </>
  );
};

export default SectionExpLog;

const SectionExtend = styled(Section)`
  .content {
    .logs {
      padding-left: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
