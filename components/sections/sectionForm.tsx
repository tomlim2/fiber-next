import styled from "styled-components";
import type { ISectionProps } from "types/app";
import { Title } from "../../styles/text";
import { InputBox } from "styles/form";
import { useState } from "react";
import axios from "axios";
import ButtonBasic from "../buttons/buttonBasic";

const SectionForm: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };
  const [inputEmail, setInputEmail] = useState("");
  const [inputFeedback, setInputFeedback] = useState("");

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = inputEmail;
    const enteredFeedback = inputFeedback;

    const body = {
      email: enteredEmail,
      feedback: enteredFeedback,
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
    <Section sectionStyles={sectionStyles}>
      <Title>Form</Title>
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
    </Section>
  );
};

export default SectionForm;

interface ISection {
  sectionStyles: ISectionProps;
}

export const Section = styled.section<ISection>`
  padding: 24px;
  background-color: ${(props) =>
    props.sectionStyles.backgroundColor ?? "#fefefe"};
  color: ${(props) => props.sectionStyles.color ?? "#252525"};

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
