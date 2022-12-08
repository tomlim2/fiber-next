import Link from 'next/link'
import styles from 'styles/components/texts.module.scss'

interface Props {
    linkType?: string
    to?: string
    children: any
}

interface Links {
    internal: React.ReactNode
    external: React.ReactNode
    email: React.ReactNode
}

type LinkType  = 'internal' | 'external' | 'email' | undefined;

const TextLink: React.FC<Props> = ({ linkType = 'internal', children, to = '/' }) => {
    const linkTypes: Links = {
        internal: <Link className={styles.link} href={to}>{children}</Link>,
        external: <a className={styles.link} href={to}>{children}</a>,
        email: <a className={styles.link} href={`mailto:${to}`}>{children}</a>
    }
    
    return linkType ? linkTypes[linkType as keyof LinkType] : <><span className={styles.link}>{children}</span></>
}

export default TextLink;