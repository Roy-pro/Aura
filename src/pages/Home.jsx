import Header from "../components/Header";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

function Home({
    tasks,
    toggleTask,
    openEditTask
}) {
  return (
    <div className="planner">
      <Header />

      <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          openEditTask={openEditTask}
      />

      <AddTask openModal={openEditTask} />
    </div>
  );
}

export default Home;