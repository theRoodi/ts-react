
type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{props.value}</div>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    )
}