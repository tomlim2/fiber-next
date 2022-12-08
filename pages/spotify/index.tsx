import Layout from 'layouts/layout'
import SpotifyLayout from 'layouts/nested/spofityLayout'
import ImageBasic from 'components/images/ImageBasic'

const Spotify = () => {
    return (
        <main>
            <ImageBasic src='assets/images/img-head-open.jpeg' />
            <ImageBasic src='assets/images/img-never.jpeg' />
            <ImageBasic src='https://picsum.photos/id/237/200/300' />
        </main>
    )
}

export default Spotify

Spotify.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <SpotifyLayout>{page}</SpotifyLayout>
        </Layout>
    )
}