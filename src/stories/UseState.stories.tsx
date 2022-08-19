import {useState} from 'react';


export default {
    title: 'useState'
}

const generateNum = () => {
    return 99955555599999
}

export const ExampleOne = () => {
    const [count, setCount] = useState(generateNum)

    const changer = (count: number) => {
        return count + 1
    }

    return <>
        <button onClick={() => setCount(changer)}>+</button>
        <div>
            {count}
        </div>
    </>
}