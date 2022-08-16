import style from './Select.module.css'
import {useState} from 'react';


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}


export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)
    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElement)
    const toggleItem = () => setActive(!active)
    const onClickItem = (value: any) => {
        props.onChange(value)
        toggleItem()
    }

    return (
        <div className={style.select}>
            <span className={style.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={style.items}>
                    {props.items.map(item =>
                        <div onMouseEnter={() => setHoveredElement(item.value)}
                             className={style.item + ' ' + (hoveredItem === item ? style.selected : '')}
                             key={item.value}
                             onClick={() => onClickItem(item.value)}>{item.title}</div>)}
                </div>}
        </div>
    )
}