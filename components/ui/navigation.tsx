import styles from "./header.module.scss";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          <li className="menu">
            <Link href="/">ylim</Link>
          </li>
          <li className="menu">
            <Link href="/">work</Link>
          </li>
          <li className="menu">
            <Link href="/about">about</Link>
          </li>
        </ul>
      </header>
      <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li>
            <Link href="/exps">tomandlim@gmail.com</Link>
          </li>
          <li>Copyright, yslim. All rights reserved</li>
        </ul>
      </footer>
    </>
  );
};

export default Navigation;
