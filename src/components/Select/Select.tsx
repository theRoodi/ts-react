import style from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from 'react';


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

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
                if (!selectedItem) {
                    props.onChange(props.items[0].value)
                }
            }
        }

        if (e.key === "Enter" || e.key === "Escape" ) {
            setActive(false)
        }
    }

    return (
        <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={style.main} onClick={toggleItem}>
                {selectedItem && selectedItem.title}
            </span>
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