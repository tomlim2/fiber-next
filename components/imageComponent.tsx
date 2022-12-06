import Image from 'next/image'
import styles from 'styles/components/image.module.scss'

import type { FC } from 'react'

interface Props {
    src: string
    alt: string
}

const ImageComponent: FC<Props> = ({ src, alt = 'image' }) => {

    return <div className={styles.image}><Image src={src} alt={alt} fill /></div>
}

export default ImageComponent