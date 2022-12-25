import { useState } from "react";
import TextLink from "components/texts/textLink";
import styled from "styled-components";

const GlobalHeader: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((val) => !val);
  };
  return (
    <Header>
      <div className="nav-trigger" onClick={() => toggleNav()}>
        {!isNavOpen ? "open" : "close"}
      </div>
      {isNavOpen && <GlobalNav />}
    </Header>
  );
};

export default GlobalHeader;

export const GlobalNav = () => {
  return (
    <Nav className="nav">
      <ul className="menus">
        <li className="menu">
          <TextLink to="/">home</TextLink>
        </li>
        <li className="menu">
          <TextLink to="/about">about</TextLink>
        </li>
        <li className="menu">
          <TextLink to="/exp">exps</TextLink>
        </li>
      </ul>
      <ul className="footer">
        <li>
          <TextLink to="tomandlim@gmail.com" usage="email">
            tomandlim@gmail.com
          </TextLink>
        </li>
        <li>Seoul, South Korea</li>
        <li>Copyright, Tom Lim. All rights reserved</li>
      </ul>
    </Nav>
  );
};

export const Header = styled.div`
  .nav-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 24px;
    top: 24px;
    z-index: 999;
    cursor: pointer;
    transition: 300ms background-color ease-in-out;

    &:hover {
      color: blue;
    }
  }
`;

export const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  padding: 24px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 998;

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    li {
    }
  }
`;
