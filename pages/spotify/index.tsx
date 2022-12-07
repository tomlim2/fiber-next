import Layout from 'components/layouts/layout'
import SpotifyLayout from 'components/layouts/nested/spofityLayout'
import ImageLocal from '@/components/images/imageLocal'
import ImageBasic from '@/components/images/ImageBasic'
import styles from 'styles/pages/spotify.module.scss'

import type { ReactElement } from 'react'

const Spotify = () => {
    return (
        <div>
            <ImageLocal src='/assets/images/img-never.jpeg' />
            <ImageBasic src='https://picsum.photos/id/237/200/300' />
        </div>
    )
}

export default Spotify

Spotify.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <SpotifyLayout>{page}</SpotifyLayout>
        </Layout>
    )
}