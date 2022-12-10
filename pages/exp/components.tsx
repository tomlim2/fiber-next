import styles from 'styles/pages/exp.module.scss'
import Layout from 'layouts/layout'
import ImageBasic from 'components/images/ImageBasic'

const Image = () => {
    const size = {
        width: '100%',
        height: '100%'
    }

    return (
        <main className={styles.imagePage}>
            <div>
                <ImageBasic size={size} src='/assets/images/img-head-open.jpeg' />
            </div>
            <div>
                <ImageBasic size={size} src='/assets/images/img-never.jpeg' />
            </div>
            <div>
                <ImageBasic size={size} src='https://picsum.photos/id/237/200/300' />
            </div>
        </main>
    )
}

export default Image

Image.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}