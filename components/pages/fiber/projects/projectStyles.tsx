import styled from "styled-components";

export const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #252525;
`;

export const Info = styled.div`
  position: absolute;
  bottom:5px;
  display: flex;
  align-items: center;

  h2{
    color: #fcfcfc;
    font-size:.75rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    margin-top: 16px;
  }

  @media only screen and (max-width: 600px) {
    align-items: start;

    .buttons {
      height: calc(100vh - 100vw - 48px);
      width: calc(100vw - 48px);
      overflow: auto;
    }
  }
`;
