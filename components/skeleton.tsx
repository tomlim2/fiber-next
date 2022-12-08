import styles from 'styles/components/skeletons.module.scss'

interface Props {
    backgroundColor?: string
}

const Skeleton: React.FC<Props> = ({ backgroundColor }) => {
    const style: any = {
        backgroundColor,
    }

    return <div className={styles.skeleton} style={style} />
}

export default Skeleton