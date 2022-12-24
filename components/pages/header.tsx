import TextLink from "components/texts/textLink"
import styles from 'styles/components/header.module.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.menus}>
                    <li className={styles.menu}><TextLink to='/'>exxxxx</TextLink></li>
                    <li className={styles.menu}><TextLink to='/fiber'>fiber</TextLink></li>
                    <li className={styles.menu}><TextLink to='/about'>about</TextLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header