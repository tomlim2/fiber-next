import { useRouter } from 'next/router'
import { useState } from 'react'
import styled, { css } from 'styled-components'

type UsageType = 'default';

interface Props {
    usage?: UsageType
    to?: string | undefined
    children: React.ReactNode
    onClick?: Function
    disabled?: boolean
    backgroundColor?: string
    color?: string
    pushButtonColor?: string
}

const ButtonBasic: React.FC<Props> = ({ usage = 'default', to, onClick, disabled, children, backgroundColor, color, pushButtonColor }) => {
    const [pushed, setPushed] = useState(false);
    const router = useRouter()
    const buttonStyles = {
        backgroundColor: backgroundColor,
        color: color,
    }

    const clickButton = () => {
        if (onClick) {
            return onClick()
        }
        if (to) {
            return router.push(to)
        }
    }

    return (
        <Button
            onClick={() => {
                clickButton();
                setPushed(true);
            }}
            style={buttonStyles}
            disabled={disabled}
            usage={usage}
        >
            {children}
        </Button>
    )
}

export default ButtonBasic;

interface IButton {
    usage: UsageType
}

export const Button = styled.button<IButton>`
    ${props => styleUsage[props.usage]}
    color: #252525;
    cursor: pointer;

    &:disabled{
        opacity: .75;
        pointer-events: none;
    }

    &:hover{
        color: blue;
    }
`

const styleDefault = css`   
`
const styleUsage = {
    default: styleDefault,
}