import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
          <form onSubmit={props.submit}>

        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)}
/>
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}
/>
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)}
/>
        </label>
         <label>
            Priority:&nbsp; /* Added &nbsp; for space */ 
            <select name="priority" onChange={(event) => props.change(event)} required>
              <option value="">--Select Priority--</option>                 
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {/* <input type="text" name="priority" onChange={(event) => props.change(event)}
/> */}
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
