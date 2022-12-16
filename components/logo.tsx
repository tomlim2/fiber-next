interface Props {
    color: string
    children: React.ReactNode
}

const EmptyComponents: React.FC<Props> = ({ color }) => {
    console.log(color);

    return <div>hi</div>
}

export default EmptyComponents