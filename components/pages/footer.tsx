import styles from 'styles/components/footer.module.scss'
import TextLink from 'components/texts/textLink'

const Footer: React.FC = () => {
    return <div className={styles.footer}><nav className={styles.nav}>
        <ul className={styles.menus}>
            <li className={styles.menu}>Copyright, Tom Lim. All rights reserved</li>
            <li className={styles.menu}><TextLink to='tomandlim@gmail.com' linkType='email'>tomandlim@gmail.com</TextLink></li>
            <li className={styles.menu}>Seoul, South Korea</li>
        </ul>
    </nav></div>
}

export default Footer