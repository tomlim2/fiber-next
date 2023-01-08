import styled from "styled-components";
import { styleColor } from "styles/color";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${styleColor.black100};
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  p.error-message {
    margin-top: 0.25rem;
    color: ${styleColor.negative};
    font-size: 0.75rem;
  }

  input {
    padding: 0.25rem 0 0.5rem 0;
    border: none;
    border-bottom: ${styleColor.black100} 1px solid;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;
