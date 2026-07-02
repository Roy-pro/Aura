import {
  Circle,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

function TaskItem({ task, toggleTask }) {

  return (

    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <div className="task-info">

        <div className="task-time">

          <Clock3 size={16} />

          <span>{task.time}</span>

        </div>

        <h3>{task.title}</h3>

      </div>

      <div
        className="task-status"
        onClick={() => toggleTask(task.id)}
      >

        {task.completed
          ? <CircleCheckBig size={28}/>
          : <Circle size={28}/>
        }

      </div>

    </div>

  );

}

export default TaskItem;