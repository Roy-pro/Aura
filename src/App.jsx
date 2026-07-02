import { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";
import TaskModal from "./components/TaskModal";

const today = new Date().toISOString().split("T")[0];

const defaultTasks = [
  {
    id: 1,
    title: "React Project",
    date: today,
    time: "09:00",
    completed: false,
  },
  {
    id: 2,
    title: "Lunch",
    date: today,
    time: "12:30",
    completed: true,
  },
  {
    id: 3,
    title: "Gym",
    date: today,
    time: "17:00",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const openCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditTask = (task) => {
    console.log("Editing:", task);

    setEditingTask(task);

    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <Home
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          openModal={openCreateModal}
          openEditTask={openEditTask}
      />

      {isModalOpen && (
        <TaskModal
          closeModal={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
        />
      )}
    </div>
  );
}

export default App;