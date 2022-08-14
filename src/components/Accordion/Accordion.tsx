type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    title: string,
    menu: Array<ItemType>
    collapsed: (value: boolean) => void
    onChange: () => void
    value: boolean
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} value={props.value}/>
            {!props.value && <AccordionBody menu={props.menu} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: (value:boolean) => void
    value: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h2 onClick={() => props.collapsed(!props.value)}>{props.title}</h2>
        </div>
    )
}

type AccordionType = {
    menu: ItemType[]
    onClick: (value: any) => void
}


const AccordionBody = (props: AccordionType) => {
    return (
        <ul>
            {props.menu.map(item => <li onClick={() => props.onClick(item.value)}>{item.title}</li>)}
        </ul>
    )
}