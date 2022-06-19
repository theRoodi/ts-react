import {useState} from 'react';

type UnAccordionPropsType = {
    title: string,
    menu: object
}

export const UncontrolledAccordion = (props: UnAccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false)

    const onClose = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div>
            <AccordionTitle title={props.title} onClick={onClose}/>
            {!collapsed && <AccordionBody menu={props.menu}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h2 onClick={props.onClick}>{props.title}</h2>
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