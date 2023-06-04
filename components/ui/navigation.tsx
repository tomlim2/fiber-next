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
            <Link href="/">collections</Link>
          </li>
          <li className="menu">
            <Link href="/about">about this website</Link>
          </li>
        </ul>
      </header>
      <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li>
            <Link href="/exps">tomandlim@gmail.com</Link>
          </li>
          <li>
            The purpose of all works this website is only for showing progress
            of the study.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Navigation;
