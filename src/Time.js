// import React, {useEffect, useState} from 'react';
// import {P, Wrapper} from "./style";
//
// function Date(props) {
//     const [time, setTime] = useState(new Date())
//
//     const getZero = num => `0${num}`.slice(-2)
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     const date = getZero(time.getUTCDate())
//     const month = getZero(time.getUTCMonth())
//     const year = time.getUTCFullYear()
//     const day = days[time.getDay()]
//     const hour = time.getUTCHours()
//     const suffix = hour >= 12 ? " PM" : " AM"
//     const optHour = getZero((hour + 11) % 12 + 1)
//     const minute = getZero(time.getUTCMinutes())
//     const second = getZero(time.getUTCSeconds())
//
//     useEffect(() => {
//         const timeInterval = setInterval(() => {
//             setTime(new Date())
//         }, 1000)
//         return () => clearInterval(timeInterval)
//     }, [])
//
//     return (
//         <Wrapper>
//             <P color="grey" size="14px"><b>Date: </b>{month}.{date}.{year}, {day}</P>
//             <P color="grey" size="14px"><b>Time: </b>{optHour}:{minute}:{second}{suffix}</P>
//         </Wrapper>
//     );
// }
//
// export default Date;

import { useState, useEffect } from 'react';
function Date(){
    // const [date, setDate] = useState(new Date());
    //
    // function refreshClock() {
    //     setDate(new Date());
    // }
    // useEffect(() => {
    //     const timerId = setInterval(refreshClock, 1000);
    //     return function cleanup() {
    //         clearInterval(timerId);
    //     };
    // }, [date.getSeconds()]);
    return (
        <span>
            nimaa
      {/*{date.toLocaleTimeString()}*/}
      {/*      {new Date().toISOString().slice(0, 10).split("-").reverse().join("/")}*/}
    </span>
    );
}
export default Date;