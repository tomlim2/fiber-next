import Title from "@/components/texts/title"
import ButtonIcon from "@/components/buttons/buttonIcon"

import styles from 'styles/components/sections/sectionHome.module.scss'

const SectionAbout = () => {
    return (
        <>
            <section className={`${styles.section} ${styles.summary}`}>
                <Title titleType="title">임연수</Title>
                <Title titleType="subTitle">프론트 엔드 개발자 & 디자이너</Title>
                <ButtonIcon/>
            </section>
        </>
    )
}

export default SectionAbout