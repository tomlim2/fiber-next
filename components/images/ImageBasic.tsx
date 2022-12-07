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

const FALLBACK_IMAGE =
  "https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";

const ImageBasic: React.FC<Props> = ({ src = undefined, alt = 'image', size = { width: '400px', height: '400px' } }) => {


    const imageOnLoadHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        if (event.currentTarget.className !== "error") {
          event.currentTarget.className = "success";
        }
      };
    
      const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        event.currentTarget.src = FALLBACK_IMAGE;
        event.currentTarget.className = "error";
      };

    return (
        <div className={styles.image} style={size}>
            {
                src ? (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={imageOnLoadHandler}
                        onError={imageOnErrorHandler}
                    />
                ) :
                    <Skeleton />
            }
        </div>
    )
}

export default ImageBasic