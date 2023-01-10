import type { ISectionProps } from "types/app";
import { Section } from "styles/section";
import { Title } from "styles/text";
import { InputBox } from "styles/form";
import { useRef, useState } from "react";

const SectionRegistration: React.FC<ISectionProps> = ({
  backgroundColor,
  color,
}) => {
  const sectionStyles = { backgroundColor, color };
  const [enteredEmail, setEnteredEmail] = useState<string>();
  function registrationHander(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <Section sectionStyles={sectionStyles}>
      <form onSubmit={(event) => registrationHander(event)}>
        <Title>Registration</Title>
        <InputBox>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={enteredEmail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEnteredEmail(event.target.value)
            }
          />
          <p className="error-message">Error message</p>
        </InputBox>
      </form>
    </Section>
  );
};

export default SectionRegistration;
