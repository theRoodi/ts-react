import {useEffect, useState} from 'react';

type PropsType ={

}

export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    },[])

    const getTwoDigits = (num: number) => num < 10 ? `0${num}` : num

    const hours = getTwoDigits(date.getHours())
    const minutes = getTwoDigits(date.getMinutes())
    const seconds = getTwoDigits(date.getSeconds())


    return (
        <div>
            <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
        </div>
    )
}