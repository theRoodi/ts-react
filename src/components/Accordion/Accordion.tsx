
type AccordionPropsType = {
    title: string,
    menu: object
    collapsed: (value: boolean) => void
    value: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} value={props.value}/>
            {!props.value && <AccordionBody menu={props.menu}/>}
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


const AccordionBody = (props: any) => {
    return (
        <div>
            <ul>
                <li>{props.menu.first}</li>
                <li>{props.menu.second}</li>
                <li>{props.menu.drink}</li>
                <li>{props.menu.dessert}</li>
            </ul>
        </div>
    )
}