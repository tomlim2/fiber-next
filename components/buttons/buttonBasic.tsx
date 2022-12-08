import styles from 'styles/components/buttons.module.scss'

interface Props {
    children: React.ReactNode
}

const ButtonBasic: React.FC<Props> = ({ children }) => {
    return <button className={styles.button}>{children}</button>
}

export default ButtonBasic;