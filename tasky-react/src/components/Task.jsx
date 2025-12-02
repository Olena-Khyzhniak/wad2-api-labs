import React from 'react';

const Task = (props) => {
    let priorityClass = "";
    if (props.priority === 'High') 
        priorityClass = 'high';
    if (props.priority === 'Medium') 
        priorityClass = 'medium';
    if (props.priority === 'Low') 
        priorityClass = 'low';
    
    
    return (
           <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>

            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p className={`priority ${priorityClass}`} > {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>


        </div>
    )
}

export default Task;
