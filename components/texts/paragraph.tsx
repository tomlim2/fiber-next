import styles from 'styles/components/texts.module.scss'

interface Props {
    textElement?: string
    children: React.ReactNode
}

interface Paragraphs {
    default: React.ReactNode
}

type TitleType  = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'default' | undefined;

const Paragraph: React.FC<Props> = ({ textElement = 'default', children }) => {
    const Paragraphs: Paragraphs = {
        default: <p className={styles.paragraph}>{children}</p>
    }
    
    return textElement ? Paragraphs[textElement  as keyof TitleType] : <div className={styles.title}>{children}</div>
}

export default Paragraph;