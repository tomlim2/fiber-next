import styled from "styled-components";

import SvgLogo from "../svg/svgLogo";
import Link from "next/link";

const GlobalHeader: React.FC = () => {
  return (
    <>
      <Header>
        <Menus>
          <li className="menu">
            <Link href="/">home</Link>
          </li>
          <li className="menu">
            <Link href="/exps">exps</Link>
          </li>
          <li className="menu">
            <Link href="/about">about</Link>
          </li>
        </Menus>
      </Header>
      <Footer>
        <Menus>
          <li>
            <Link href="/exps">tomandlim@gmail.com</Link>
          </li>
          <li>Copyright, yslim. All rights reserved</li>
        </Menus>
      </Footer>
    </>
  );
};

export default GlobalHeader;

export const Header = styled.header`
  position: fixed;
  top: 5px;
  width: 100%;
  padding: 0 24px;
  z-index: 10000;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 5px;
  width: 100%;
  padding: 0 24px;
`;

export const Menus = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  li {
    font-size: 0.75rem;
    a {
      font-size: 0.75rem;
      text-decoration: none;
      color: #000;

      &:hover {
        color: blue;
      }
    }
  }
`;
