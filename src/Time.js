import React, {useEffect, useState} from 'react';
import {P, Wrapper} from "./style";

function Time() {
    const [time, setTime] = useState(new Date())

    const getZero = num => `0${num}`.slice(-2)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = getZero(time.getUTCDate())
    const month = getZero(time.getUTCMonth())
    const year = time.getUTCFullYear()
    const day = days[time.getDay()]
    const hour = time.getHours()
    const suffix = hour >= 12 ? " PM" : " AM"
    const optHour = getZero((hour + 11) % 12 + 1)
    const minute = getZero(time.getMinutes())
    const second = getZero(time.getSeconds())

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timeInterval)
    }, [])

    return (
        <Wrapper>
            <P color="grey" size="14px"><b>Time: </b>{month}.{date}.{year}, {day}</P>
            <P color="grey" size="14px"><b>Time: </b>{optHour}:{minute}:{second}{suffix}</P>
        </Wrapper>
    );
}

export default Time;

