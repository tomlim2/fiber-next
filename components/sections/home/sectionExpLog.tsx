import styles from 'styles/components/sections/sectionExpLog.module.scss'
import variables from 'styles/variables.module.scss'
import ButtonLink from "@/components/buttons/buttonLink"

const SectionExpLog = () => {
    return (
        <>
            <section className={styles.section}><ButtonLink backgroundColor={variables.spotify}>Spotify</ButtonLink></section>
        </>
    )
}

export default SectionExpLog