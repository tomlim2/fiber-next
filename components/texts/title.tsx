import styled, { css } from 'styled-components'
import styles from 'styles/components/texts.module.scss'

interface Props {
    usage?: UsageType
    children: React.ReactNode
}

type UsageType = 'page' | 'about' | 'main' | 'title' | 'subTitle' | 'default';

const Title: React.FC<Props> = ({ usage = 'default', children }) => {
    return <Text usage={usage}>{children}</Text>
}


export default Title;

export const Text = styled.p<InterfaceText>`
    ${props => styleUsage[props.usage]}
`

interface InterfaceText {
    usage: UsageType
}

const styleAbout = css`
    background: palevioletred;
    color: white;
    font-size: 1rem;
`

const styleDefault = css`
    color: blue;
`

const stylePage = css`
    font-size: 1.75rem;
`

const styleMain = css`
    font-size: 1.75rem;
`

const styleTitle = css`
    font-size: 1.25rem;
`

const styleSubTitle = css`
`

const styleUsage = {
    page: stylePage,
    main: styleMain,
    title: styleTitle,
    subTitle: styleSubTitle,
    about: styleAbout,
    default: styleDefault
}

