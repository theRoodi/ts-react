import {useEffect, useState} from 'react';


export default {
    title: 'useEffect'
}

export const ExampleOne = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("render")
        document.title = counter.toString()
    },[counter])

    return<>
        {counter}
        <button onClick={() => setCounter(counter+1)}>+</button>
    </>
}


export const SetTimeout = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(state => state+1)
    },[])

    return<>
        {counter}
        <button onClick={() => setCounter(counter+1)}>+</button>
    </>
}