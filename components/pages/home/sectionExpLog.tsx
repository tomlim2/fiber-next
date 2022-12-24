import ButtonBasic from "@/components/buttons/buttonBasic"
import Title from "@/components/texts/title"

import variables from 'styles/variables.module.scss'
import styles from 'styles/components/sections/sectionHome.module.scss'

const SectionExpLog = () => {
    return (
        <>
            <section className={styles.section}>
                <Title>exp-front</Title>
                <div className={styles.content}>
                    <ButtonBasic backgroundColor={variables.spotify} color={variables.black100} to='exp/spotify'>Spotify</ButtonBasic>
                    <ButtonBasic to='exp/components'>Components</ButtonBasic>
                </div>

            </section>
        </>
    )
}

export default SectionExpLog