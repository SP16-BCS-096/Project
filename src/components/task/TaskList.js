import React from "react"
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="Degrre Title" data-id={idx} id={projectName} className="form " />
          </td>
          <td>
            <input type="text"  name="CGPA" id={task} data-id={idx} className="form " />
          </td>
          <td>
            <input type="text"  name="University" id={taskNotes} data-id={idx} className="form" />
          </td>
          <td>
            <select name="Status" id={taskStatus} data-id={idx} className="form" >
              <option value="pending">Pending</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
          
            </select>
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList;