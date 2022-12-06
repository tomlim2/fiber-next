import Image from 'next/image'

import type { FC } from 'react'

interface Props {
    src: string
    alt?: string
    width?: number
    height?: number
}

const NextImage: FC<Props> = ({ src, alt = 'image', width = 400, height = 400 }) => {
    return <Image src={src} alt={alt} width={width} height={height} />
}

export default NextImage