import Title from "@/components/texts/title"

import styles from 'styles/components/sections/sectionHome.module.scss'

const SectionSummary = () => {
    return (
        <>
            <section className={`${styles.section} ${styles.summary}`}>
                <Title usage="page">Playground #Explore #Experiment #Experience</Title>
            </section>
        </>
    )
}

export default SectionSummary