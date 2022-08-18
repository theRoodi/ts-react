import React, {useMemo, useState} from 'react';

export default {
    title: 'react memo'
}

const Counter = (props: any) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export const ExampleOne = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['One', 'Two', "Three"])

    const addUser = () => {
        const newUser = [...users, `Four ${count}`]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>
}


export const DifficultCounting = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 1000000) {
                fake++
                const fakeRnd = Math.random()
            }
            temp = temp * i
        }
        return temp
    },[a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(+e.currentTarget.value))}/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>

    </>
}

export const HelpAtMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['One', 'Two', "Three"])

    const addUser = () => {
        const newUser = [...users, `Four ${count}`]
        setUsers(newUser)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('o') > -1)
    }, [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => addUser()}>+</button>
        {count}
        <Users users={newArray}/>
    </>
}