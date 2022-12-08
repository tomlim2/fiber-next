import Link from 'next/link'
import styles from 'styles/components/buttons.module.scss'

interface Props {
    to?: string
    backgroundColor?: string
    color?: string
    children: React.ReactNode | string
}

const ButtonLink: React.FC<Props> = ({ children, to = '/', backgroundColor, color }) => {
    const style = {
        backgroundColor,
        color
    }

    return <Link className={styles.link} style={style} href={to}>{children}</Link>
}

export default ButtonLink;