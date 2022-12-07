import Image from 'next/image'
import Skeleton from 'components/skeleton'
import styles from 'styles/components/images.module.scss'

interface size {
    width: string 
    height: string
}

interface Props {
    src?: string | undefined
    alt?: string
    size?: size
}

const ImageLocal: React.FC<Props> = ({ src = undefined, alt = 'image', size = { width: '400px', height: '400px'} }) => {
    return (
        <div className={styles.image} style={size}> {
            src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill />
            ) :
                <Skeleton />}
        </div>
    )
}

export default ImageLocal