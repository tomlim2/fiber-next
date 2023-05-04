import styles from "styles/components/footer.module.scss";
import TextLink from "components/texts/textLink";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <nav className={styles.nav}>
        <ul className={styles.menus}>
          <li className={styles.menu}>
            Copyright, Tom Lim. All rights reserved
          </li>
          <li className={styles.menu}>
            <TextLink to="tomandlim@gmail.com" usage="email">
              tomandlim@gmail.com
            </TextLink>
          </li>
          <li className={styles.menu}>Seoul, South Korea</li>
        </ul>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;

export const FooterWrapper = styled.footer``;
