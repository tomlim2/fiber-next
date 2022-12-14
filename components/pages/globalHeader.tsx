import { useState } from "react";
import styled from "styled-components";

import SvgLogo from "../svg/svgLogo";
import TextLink from "components/texts/textLink";

import { styleColor } from "styles/color";

const GlobalHeader: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((val) => !val);
  };
  return (
    <>
      <Header>
        <div className="nav-trigger" onClick={() => toggleNav()}>
          {!isNavOpen ? <SvgLogo color={styleColor.negative} /> : <SvgLogo color={styleColor.black100} />}
        </div>
        {isNavOpen && <GlobalNav />}
      </Header>
      {isNavOpen && <Dim onClick={() => setIsNavOpen(false)}></Dim>}
    </>
  );
};

export default GlobalHeader;

export const GlobalNav = () => {
  return (
    <Nav>
      <ul className="menus">
        <li className="menu">
          <TextLink to="/">home</TextLink>
        </li>
        <li className="menu">
          <TextLink to="/about">about</TextLink>
        </li>
        <li className="menu">
          <TextLink to="/exps">exps</TextLink>
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
    justify-content: flex-end;
    position: fixed;
    right: 1.75rem;
    top: 1.75rem;
    z-index: 999;
    cursor: pointer;
    transition: 300ms background-color ease-in-out;
  }
`;

export const Nav = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  background-color: #fcfcfc;
  z-index: 998;

  .menus {
    display: flex;
    flex-direction: column;
    gap: 24px;
    li {
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Dim = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 333;
`;
