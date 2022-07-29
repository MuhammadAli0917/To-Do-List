import {Container, ToDoDiv, Title, Wrapper, P, Button, BottomWrapper, InnerContainer, AddButton} from "./style";
import {useEffect, useState} from "react";
import List from "./List";
import Form from "./Form";
import Time from "./Time";
const getLocalStorage = () => {
    let list = localStorage.getItem("localTasks")
        if (list) {
            return JSON.parse(list)
        }
        return []
}


console.log(getLocalStorage())



function App() {
    const [tasks, setTasks] = useState(getLocalStorage())
    const [addTask, setAddTask] = useState(false)


    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("localTasks", JSON.stringify(tasks))
    }, [tasks])

    let currentTime = 0

    const addTitle = (value) => {
        if (value) {
            setTasks(tasks.filter(t => t.id = tasks.indexOf(t) + 1))
            const newTask = {id: tasks.length + 1, title: value}
            setTasks((tasks) => {
                return [...tasks, newTask]
            })
            let list = document.querySelector(".list")
            list.scrollTo(0, +list.scrollHeight)
        } else{
            alert("Add a task")
        }
    }



    const handleClear = () => {
        setTasks([])
    }


    useEffect(() => {
        setTasks(tasks.filter(t => t.id = tasks.indexOf(t) + 1))
    }, [tasks.length])

  return (
    <Container>
      <ToDoDiv>
        <Title>To Do List</Title>
         <InnerContainer>
             <Time />
             <Wrapper style={{marginTop: "-10px"}}>
                 <P fontWeight="bold" color="#595858" size="18px">{tasks.length} tasks</P>
                 <Button onClick={handleClear}>Clear List</Button>
             </Wrapper>
             {tasks.length <= 0 ? <Title style={{background: "transparent", color: "grey", opacity: 0.6, fontSize: "30px", marginTop: "6rem"}}>Add Some Tasks</Title> : <List currentTime={currentTime} removeTask={removeTask} tasks={tasks} />}
             <BottomWrapper>
                 {!addTask ? <AddButton onClick={() => setAddTask(true)}>Add Task</AddButton> : <Form tasks={tasks} addTask={addTitle} addState={addTask} />}
             </BottomWrapper>
         </InnerContainer>
      </ToDoDiv>
    </Container>
  );
}

export default App;
