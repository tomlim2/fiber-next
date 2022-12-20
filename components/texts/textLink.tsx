import { useRouter } from 'next/router';
import styled, { css } from 'styled-components'

interface Props {
    usage?: UsageType
    to?: string
    children: any
}

type UsageType = 'internal' | 'external' | 'email';

const TextLink: React.FC<Props> = ({ usage = 'internal', children, to = '/' }) => {
    const router = useRouter()
    const navigateTo = (to: string) => {
        switch (usage) {
            case 'internal':
                router.push(to)
                break;

            case 'external':
                window.open(`${to}`);
                break;

            case 'email':
                window.open(`mailto:${to}`);
                break;

            default:
                break;
        }
    }
    return <Link usage={usage} onClick={() => navigateTo(to)}>{children}</Link>
}

export default TextLink;

interface ILink {
    usage: UsageType
}

export const Link = styled.a<ILink>`
    ${props => styleUsage[props.usage]}
    color: #252525;
    cursor: pointer;

    &:hover{
        color: blue;
    }
`

const styleInternal = css`   
`

const styleExternal = css`
`

const styleEmail = css`
`

const styleUsage = {
    internal: styleInternal,
    external: styleExternal,
    email: styleEmail
}