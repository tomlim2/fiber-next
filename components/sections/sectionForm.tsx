import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ButtonBasic from "../buttons/buttonBasic";

import { Title } from "../../styles/text";
import { InputBox } from "styles/form";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";

interface ISectionPropsExtend extends ISectionProps {
  data: any;
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

    // axios.post("/api/feedback", body);

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  
  return (
    <SectionExtend sectionStyles={sectionStyles}>
      <Title usage="section">Form</Title>
      <form onSubmit={(event) => submitFormHandler(event)}>
        <InputBox>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <p className="error-message">Error message</p>
        </InputBox>
        <InputBox>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            id="feedback"
            rows={5}
            value={inputFeedback}
            onChange={(event) => setInputFeedback(event.target.value)}
          />
          <p className="error-message">Error message</p>
        </InputBox>
        <ButtonBasic usage="border">Send Feedback</ButtonBasic>
      </form>
      <Title usage="section">Get</Title>
      <div>
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.email}</li>
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
