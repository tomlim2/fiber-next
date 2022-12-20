import styled, { css } from 'styled-components'

interface Props {
    usage?: UsageType
    children: React.ReactNode
}

type UsageType = 'page' | 'about' | 'main' | 'title' | 'subTitle' | 'default';

const Title: React.FC<Props> = ({ usage = 'default', children }) => {
    return <Text usage={usage}>{children}</Text>
}

export default Title;

export const Text = styled.p<IText>`
    ${props => styleUsage[props.usage]}
`

interface IText {
    usage: UsageType
}

const styleDefault = css`
    color: blue;
`

const stylePage = css`
    font-size: 1.75rem;
    font-weight: 600;
`

const styleMain = css`
    font-size: 1.75rem;
`

const styleAbout = css`
    background: palevioletred;
    color: white;
    font-size: 1rem;
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

