import Layout from 'layouts/layout'
import SpotifyLayout from 'layouts/nested/spofityLayout'
import ImageLocal from '@/components/images/imageLocal'
import ImageBasic from '@/components/images/ImageBasic'

const Spotify = () => {
    return (
        <div>
            <ImageLocal src='/assets/images/img-never.jpeg' />
            <ImageBasic src='https://picsum.photos/id/237/200/300' />
        </div>
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