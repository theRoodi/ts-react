
type AccordionPropsType = {
    title: string,
    menu: object
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody menu={props.menu}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
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