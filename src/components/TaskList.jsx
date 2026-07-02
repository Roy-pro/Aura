import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    toggleTask,
    openEditTask
}) {

  const today = new Date().toISOString().split("T")[0];

  const todaysTasks = tasks
  .filter(task => task.date === today)
  .sort((a,b)=>a.time.localeCompare(b.time));

  return (
    <>

      <h2>Today's Focus</h2>

     <h2 className="task-count">
        {todaysTasks.length}{" "}
        {todaysTasks.length === 1 ? "Task" : "Tasks"} Today
      </h2>

      {todaysTasks.length === 0 && (
        <div className="empty-state">
          
          <div className="leaf">🌿</div>

          <h3>Nothing planned today</h3>

          <p>
            Take a breath or add your first task.
          </p>
        </div>
      )}

      {todaysTasks.length > 0 && todaysTasks.map((task) => (

        <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            openEditTask={openEditTask}
        />

      ))}

    </>
  );
}

export default TaskList;