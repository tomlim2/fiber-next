import styles from 'styles/components/texts.module.scss'

interface Props {
    titleType?: string
    children: React.ReactNode
}

interface Titles {
    h1: React.ReactNode
    title: React.ReactNode
    subTitle: React.ReactNode
    h4: React.ReactNode
    h5: React.ReactNode
    default: React.ReactNode
}

type TitleType  = 'h1' | 'title' | 'subTitle' | 'h4' | 'h5' | 'default' | undefined;

const Title: React.FC<Props> = ({ titleType = 'default', children }) => {
    const texts: Titles = {
        h1: <h1 className={styles.h1}>{children}</h1>,
        title: <h2 className={styles.title}>{children}</h2>,
        subTitle: <h3 className={styles.subTitle}>{children}</h3>,
        h4: <h4 className={styles.h4}>{children}</h4>,
        h5: <h5 className={styles.h5}>{children}</h5>,
        default: <div className={styles.name}>{children}</div>
    }
    
    return titleType ? texts[titleType  as keyof TitleType] : <div className={styles.name}>{children}</div>
}

export default Title;