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

export const Text = styled.p<TextInterface>`
    ${props => styleUsage[props.usage]}
`

const stylePage = css`
    color: green;
`

const styleAbout = css`
    color: #252525;
    font-size: 1.25rem;
    line-height: 1.35;   
`

const styleDefault = css`
    color: blue;
`

const styleUsage = {
    page: stylePage,
    about: styleAbout,
    default: styleDefault
}

