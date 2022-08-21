import React, {useEffect, useState} from 'react';
import styles from './AnalogClock.module.css'

type PropsType = {
    mode: 'analog' | 'digital'
}

const getTwoDigits = (num: number) => num < 10 ? `0${num}` : num
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
            break
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}

export const DigitalClock: React.FC<ClockViewPropsType> = ({date}) => {
    const hours = getTwoDigits(date.getHours())
    const minutes = getTwoDigits(date.getMinutes())
    const seconds = getTwoDigits(date.getSeconds())


    return (
        <><span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span></>
    )
}

export const AnalogClock: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <div className={styles.clock}>
            <div className={styles['analog-clock']}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}