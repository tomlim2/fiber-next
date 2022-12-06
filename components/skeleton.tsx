import type { FC, ReactNode, ReactElement } from 'react'

interface Props {
    color: string
    children: ReactNode
}

const EmptyComponents: FC<Props> = ({ color }) => {
    console.log(color);

    return <div>hi</div>
}

export default EmptyComponents