import React from 'react';
import ListItem from "./ListItem";

function List({tasks, removeTask, currentTime}) {

    return (
        <div className={`list ${tasks.length >= 5 ? "listScroll" : ""}`}>
            {tasks.map(task => {
                return <ListItem currentTime={currentTime} removeTask={removeTask} key={task.id} task={task} tasks={tasks} />
            })}
        </div>
    );
}

export default List;