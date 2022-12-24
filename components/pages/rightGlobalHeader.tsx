import Footer from "components/pages/footer";
import TextLink from "components/texts/textLink";
import styled from "styled-components";
import ButtonBasic from "../buttons/buttonBasic";

const RightGlobalHeader: React.FC = () => {
  return (
    <GlobalNav>
      <div className="">
        <ButtonBasic>Open</ButtonBasic>
      </div>
      <nav className="">
        <ul className="menus">
          <li className="menu">
            <TextLink to="/">exxxxx</TextLink>
          </li>
          <li className="menu">
            <TextLink to="/fiber">fiber</TextLink>
          </li>
          <li className="menu">
            <TextLink to="/about">about</TextLink>
          </li>
        </ul>
        <ul className="footer">
          <li>Copyright, Tom Lim. All rights reserved</li>
          <li>
            <TextLink to="tomandlim@gmail.com" usage="email">
              tomandlim@gmail.com
            </TextLink>
          </li>
          <li>Seoul, South Korea</li>
        </ul>
      </nav>
    </GlobalNav>
  );
};

export default RightGlobalHeader;

export const GlobalNav = styled.div`
  position: fixed;
  right: 0;
  width: 300px;
  height: 100vh;
  padding: 16px;
  background-color: #fcfcfc;

  nav {
    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
      li {
      }
    }
  }
`;
