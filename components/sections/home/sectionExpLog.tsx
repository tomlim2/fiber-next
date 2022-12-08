import ButtonLink from "@/components/buttons/buttonLink"

import styles from 'styles/components/sections/sectionExpLog.module.scss'
import variables from 'styles/variables.module.scss'

const SectionExpLog = () => {
    return (
        <>
            <section className={styles.section}>
                <ButtonLink backgroundColor={variables.spotify} color={variables.black100} to='exp/spotify'>Spotify</ButtonLink>
                <ButtonLink to='exp/images'>Image</ButtonLink>
            </section>
        </>
    )
}

export default SectionExpLog