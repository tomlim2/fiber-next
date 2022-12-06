import Layout from 'components/layouts/layout'
import SpotifyLayout from 'components/layouts/nested/spofityLayout'
import NextImage from 'components/images/NextImage'
import styles from 'styles/pages/spotify.scss'

import type { ReactElement } from 'react'

const Spotify = () => {
    return (
        <div>
            <div className=''>
                <NextImage src={'/assets/images/img_never.jpeg'} />
            </div>
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