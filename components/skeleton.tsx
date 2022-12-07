import styles from 'styles/components/skeleton.module.scss'

interface Props {
    color?: string
    children?: React.ReactNode
}

const Skeleton: React.FC<Props> = ({ color }) => {
    return <div className={styles.skeleton}></div>
}

export default Skeleton