import { useState } from "react";
import styled from "styled-components";

import ButtonBasic from "../ui/buttonBasic";

import { Title } from "../../styles/text";
import { ControlInput } from "styles/form";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";

interface ISectionPropsExtend extends ISectionProps {
  data: any;
}

interface Ifeedback {
  id: string;
  email: string;
  text: string;
}

const SectionForm: React.FC<ISectionPropsExtend> = ({
  backgroundColor,
  color,
  data,
}) => {
  const sectionStyles = { backgroundColor, color };
  const [inputEmail, setInputEmail] = useState("");
  const [inputFeedback, setInputFeedback] = useState("");

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = inputEmail;
    const enteredFeedback = inputFeedback;

    const body = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const [feedbackData, setFeedbackData] = useState<Ifeedback>();
  const loadFeedbackHandler = (id: string) => {
    console.log(id);

    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");

        setFeedbackData(data.feedback);
      });
  };

  return (
    <SectionExtend sectionStyles={sectionStyles}>
      <Title usage="section">Form</Title>
      <form onSubmit={(event) => submitFormHandler(event)}>
        <ControlInput>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <p className="error-message">Error message</p>
        </ControlInput>
        <ControlInput>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            id="feedback"
            rows={5}
            value={inputFeedback}
            onChange={(event) => setInputFeedback(event.target.value)}
          />
          <p className="error-message">Error message</p>
        </ControlInput>
        <ButtonBasic>Send Feedback</ButtonBasic>
      </form>
      <Title usage="section">Get</Title>
      <div>
        {feedbackData && <p>{feedbackData.text}</p>}
        <ul>
          {data.map((item: any) => (
            <li key={item.id} onClick={() => loadFeedbackHandler(item.id)}>
              email: {item.email} <br />
              feedback: {item.text}
            </li>
          ))}
        </ul>
      </div>
    </SectionExtend>
  );
};

export default SectionForm;

export const SectionExtend = styled(Section)`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
