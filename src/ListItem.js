import React, {useState, useEffect} from 'react';
import {P, Wrapper} from "./style";
import {Star} from "@styled-icons/boxicons-solid/Star";
import {Trash} from "@styled-icons/foundation/Trash";
import {Check2} from "@styled-icons/bootstrap/Check2"
import {CheckDouble} from "@styled-icons/boxicons-regular/CheckDouble"

function ListItem({task, tasks, removeTask, currentTime}) {
    const [done, setDone] = useState(false)
    const [liked, setLiked] = useState(false)


    console.log(currentTime)
    const {id, title} = task
    const time = new Date()
    const getZero = num => `0${num}`.slice(-2)
    const minute = getZero(time.getMinutes())
    const hour = time.getHours()
    const suffix = hour >= 12 ? " PM" : " AM"
    const optHour = getZero((hour + 11) % 12 + 1)

    const handleDone = () => {
        setDone(!done)
    }


    return (<>
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
                <P className={`title ${done ? "titleDone" : ""} ${liked ? "likedTask" : ""}`} >{id}. {title}</P>
                <div style={{display: "flex", alignItems: "center", marginLeft: "auto"}}>
                    <p style={{alignSelf: "baseline" ,fontSize: "12px"}} className={`date-task ${done ? "date-done" : ""}`}>{optHour}:{minute} {suffix}</p>
                    {!done ? <Check2 onClick={handleDone} /> : <CheckDouble className={`double-icon ${done ? "done" : ""}`} style={{color: "green"}} onClick={handleDone} />}
                    <Star onClick={() => setLiked(!liked)} className={`star ${liked ? "liked" : ""}`} />
                    <Trash style={{color: "red"}} onClick={() => {removeTask(id)}} />
                </div>
            </div>
            {task !== tasks[tasks.length - 1] && <hr style={{margin: "0 0"}} />}
    </>
    );
}

export default ListItem;

//  style={{marginTop: "-7px"}}