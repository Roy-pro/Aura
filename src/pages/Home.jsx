import Header from "../components/Header";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

function Home({ tasks, openModal, toggleTask }) {
  return (
    <div className="planner">
      <Header />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
    />

      <AddTask openModal={openModal} />
    </div>
  );
}

export default Home;