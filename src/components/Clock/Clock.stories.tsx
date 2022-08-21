import {Clock} from './Clock';
import {useEffect, useState} from 'react';

export default {
title: "Clock"
}

export const BaseAnalogExample = () => {
    return< Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return< Clock mode={'digital'}/>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('render')

    useEffect(()=>{
        console.log("effect")
    }, [])

    const onIncrease = () => {
        setCounter(counter + 1)
    }

    return<>
        Hello, counter: {counter} <button onClick={onIncrease}>+</button>
    </>
}

export const KeyTrackerExample = () => {

    const [key, setKey] = useState('')

    console.log('render')

    useEffect(()=>{
        console.log("effect")
        const handler = (e: KeyboardEvent) => {
            setKey(key + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [key])

    return<>
        Key: {key}
    </>
}