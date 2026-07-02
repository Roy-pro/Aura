import {
  Circle,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

function TaskItem({
    task,
    toggleTask,
    openEditTask
}) {

  return (

    <div className={`task-card ${task.completed ? "completed" : ""}`} onClick={() => openEditTask(task)}>

      <div className="task-info">

        <div className="task-time">

          <Clock3 size={16} />

          <span>{task.time}</span>

        </div>

        <h3>{task.title}</h3>

      </div>

      <div className="task-status">

  <button
    className="status-button"
    onClick={(e) => {
      e.stopPropagation();
      toggleTask(task.id);
    }}
  >
    {task.completed
      ? <CircleCheckBig size={28}/>
      : <Circle size={28}/>
    }
  </button>

</div>

    </div>

  );

}

export default TaskItem;