import React, {createRef, useRef,useEffect, useState} from 'react';
import {Wrapper, Input, SubmitButton} from "./style";


function Form({addTask, tasks}) {
    const [task, setTask] = useState("")
    const inputRef = useRef(null)


    useEffect(() => {
        inputRef.current.focus()
    }, [tasks.length])

    // document.querySelector(".addInput").addEventListener("keypress", (e) => {
    //     e.key === "enter" && addTask(task)
    // })

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.keyCode == 13){
            addTask(task)
            setTask("")
            inputRef.current.focus()
        }
    }


    return (
        <Wrapper>
            <Input className="addInput" ref={inputRef} value={task} onKeyDown={handleKeyPress} onChange={handleChange} placeholder="e.g. Read a book" type="text" />
            <SubmitButton onClick={() => {
                addTask(task)
                setTask("")
                inputRef.current.focus()
            }}>Add</SubmitButton>
        </Wrapper>
    );
}

export default Form;