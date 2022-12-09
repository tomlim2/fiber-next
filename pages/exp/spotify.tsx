import styles from 'styles/pages/exp.module.scss'
import Layout from 'layouts/layout'
import SectionSpotify from '@/components/sections/exp/sectionSpotify'

const Spotify = () => {
    const size = {
        width: '100%',
        height: '100%'
    }

    return (
        <main className={styles.spotifyPage}>
            <SectionSpotify />
        </main>
    )
}

export default Spotify

Spotify.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}