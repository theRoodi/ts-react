import {useReducer, useState} from 'react';

type UnAccordionPropsType = {
    title: string,
    menu: object
}

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) : StateType => {
    switch (action.type){
        case 'TOGGLE-COLLAPSED':
            const stateCopy = {...state}
            stateCopy.collapsed = !state.collapsed
            return stateCopy
        default:
            throw new Error("Error type asshole")
    }
}

export const UncontrolledAccordion = (props: UnAccordionPropsType) => {
    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}}/>
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