import Title from "@/components/texts/title"
import ButtonIcon from "@/components/buttons/buttonIcon"

import styles from 'styles/components/sections/sectionHome.module.scss'
import Paragraph from "@/components/texts/paragraph"

const SectionAbout = () => {
    return (
        <>
            <section className={`${styles.section} ${styles.summary}`}>
                <Title usage="title">임연수</Title>
                <Title usage="subTitle">프론트 엔드 개발자 & 디자이너</Title>
                <Title usage="subTitle">서울, 한국</Title>
                <Paragraph usage='about'>hi</Paragraph>
            </section>
        </>
    )
}

export default SectionAbout