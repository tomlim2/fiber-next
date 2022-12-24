import styles from 'styles/components/footer.module.scss'
import TextLink from 'components/texts/textLink'

const Footer: React.FC = () => {
    return <div className={styles.footer}><nav className={styles.nav}>
        <ul className={styles.menus}>
            <li className={styles.menu}>what is your favorite song</li>
            <li className={styles.menu}><TextLink to='tomandlim@gmail.com' usage='email'>Local</TextLink></li>
            <li className={styles.menu}>South Korea</li>
        </ul>
    </nav></div>
}

export default Footer