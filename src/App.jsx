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

  const addTask = (newTask) => {
    setTasks(previousTasks => [
      ...previousTasks,
      newTask,
    ]);
  };

  const toggleTask = (id) => {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="app">

        <Home
            tasks={tasks}
            toggleTask={toggleTask}
            openEditTask={(task) => {
                setEditingTask(task);
                setIsModalOpen(true);
            }}
        />

        {isModalOpen && (
            <TaskModal
                closeModal={() => setIsModalOpen(false)}
                addTask={addTask}
            />
        )}

    </div>
  );
}

export default App;