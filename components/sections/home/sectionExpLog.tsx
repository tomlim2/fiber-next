import ButtonLink from "@/components/buttons/buttonLink"
import Title from "@/components/texts/title"

import styles from 'styles/components/sections/sectionExpLog.module.scss'
import variables from 'styles/variables.module.scss'

const SectionExpLog = () => {
    return (
        <>
            <section className={styles.section}>
                <Title>exp</Title>
                <div className="">
                    <ButtonLink backgroundColor={variables.spotify} color={variables.black100} to='exp/spotify'>Spotify</ButtonLink>
                    <ButtonLink to='exp/images'>Image</ButtonLink>
                </div>

            </section>
        </>
    )
}

export default SectionExpLog