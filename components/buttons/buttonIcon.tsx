import { useRouter } from 'next/router'
import { useState } from 'react'
import SvgComponent from 'components/svg/svgComponent'

import styles from 'styles/components/buttons.module.scss'

interface Props {
    to?: string | undefined
    onClick?: Function
    disabled?: boolean
    backgroundColor?: string
    color?: string
    pushButtonColor?: string
}

const ButtonIcon: React.FC<Props> = ({ to, onClick, disabled, backgroundColor, color, pushButtonColor }) => {
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
        <button
            onClick={() => {
                clickButton();
                setPushed(true);
            }}
            style={buttonStyles}
            className={styles.icon}
            disabled={disabled}
        >
            <SvgComponent />
            <span style={{ backgroundColor: pushButtonColor ?? '#fff' }} className={`${pushed ? styles.push : ''}`} onAnimationEnd={() => setPushed(false)}></span>
        </button>
    )
}

export default ButtonIcon;