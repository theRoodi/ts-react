import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'UncontrolledInput',

}

export const Input = () => {
    return <input />
}
export const UnControlledInput = () => {
    return <input value={'text'}/>
}
export const TrackedInput = () => {
    const [currentValue, setCurrentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)
    }
    return <><input onChange={onChange}/> Value: {currentValue}</>
}
export const SavedInput = () => {
    const [currentValue, setCurrentValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    const save = () => {
        const element = ref.current as HTMLInputElement
        setCurrentValue(element.value)

    }
    return <><input ref={ref}/><button onClick={save}>Save</button> Value: {currentValue}</>
}

export const ControlledInput = () => {
    const [parent, setParent] = useState('')

    return <> <input value={parent} onChange={(e) => setParent(e.currentTarget.value)}/> </>
}

export const ControlledCheckbox = () => {
    const [parent, setParent] = useState(true)

    return <> <input type={'checkbox'} checked={parent} onChange={(e) => setParent(e.currentTarget.checked)}/> </>
}

export const ControlledSelect = () => {
    const [parent, setParent] = useState<string>('0')

    return <>
        <select value={parent} onChange={(e) => setParent(e.currentTarget.value)}>
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </>
}