import Skeleton from 'components/skeleton'
import styles from 'styles/components/images/images.module.scss'
import { useState } from 'react'

interface Size {
  width: string
  height: string
}

interface Props {
  src?: string | undefined
  alt?: string
  size?: Size
}

const ImageBasic: React.FC<Props> = ({ src = '', alt = 'image', size = { width: '400px', height: '400px' } }) => {
  const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  const isHttp = pattern.test(src)
  const [onLoaded, setOnLoaded] = useState(!isHttp)

  const imageOnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (event.currentTarget.className !== "error") {
      setOnLoaded(true)
    }
  };

  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.className = "error";
  };

  return (
    <div className={styles.imageFrame} style={size}>
      {!onLoaded && <Skeleton />}
      <img
        style={{ visibility: onLoaded ? 'visible' : 'hidden' }}
        className={styles.image}
        alt={alt}
        src={src}
        onLoad={imageOnLoadHandler}
        onError={imageOnErrorHandler}
      />
    </div>
  )
}

export default ImageBasic