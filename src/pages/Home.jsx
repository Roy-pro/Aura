import Header from "../components/Header";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

function Home({
    tasks,
    toggleTask,
    deleteTask,
    openModal,
    openEditTask
}) {
  return (
    <div className="planner">
      <Header />

      <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          openEditTask={openEditTask}
      />

      <AddTask openModal={openModal} />
    </div>
  );
}

export default Home;