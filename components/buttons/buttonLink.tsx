import Link from 'next/link'
import styles from 'styles/components/buttons.module.scss'

interface Props {
    to?: string
    children: React.ReactNode
}

const ButtonLink: React.FC<Props> = ({ children, to = '/' }) => {
    return <Link className={styles.link} href={to}>{children}</Link>
}

export default ButtonLink;