import styled, { css } from 'styled-components'

interface Props {
    usage?: UsageType
    children: React.ReactNode
}

type UsageType = 'page' | 'about' | 'default';

const Paragraph: React.FC<Props> = ({ usage = 'default', children }) => {
    return <Text usage={usage}>{children}</Text>
}

export default Paragraph;

interface TextInterface {
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
    color: green;
`

const styleUsage = {
    page: stylePage,
    about: styleAbout,
    default: styleDefault
}

export const Text = styled.p<TextInterface>`
    ${props => styleUsage[props.usage]}
`