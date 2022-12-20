import styled from 'styled-components'

import TextLink from 'components/texts/textLink'
import Paragraph from "@/components/texts/paragraph"

const SectionAbout = () => {
    return (
        <>
            <Section>
                <Paragraph usage='about'>임연수<br /> 서울, 한국</Paragraph>
                <Paragraph usage='about'><TextLink to='tomandlim@gmail.com' usage='email'>tomandlim@gmail.com</TextLink></Paragraph>
            </Section>
        </>
    )
}

export default SectionAbout

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 36px;
    padding: 0 12px;
`