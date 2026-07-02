import { useState, useEffect } from "react";

import "./App.css";

import Home from "./pages/Home";

import TaskModal from "./components/TaskModal";

const defaultTasks = [
  {
    id: 1,
    title: "React Project",
    date: "2026-07-02",
    time: "09:00",
    completed: false,
  },
  {
    id: 2,
    title: "Lunch",
    date: "2026-07-02",
    time: "12:30",
    completed: true,
  },
  {
    id: 3,
    title: "Gym",
    date: "2026-07-02",
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

  return (
    <div className="app">

        <Home
            tasks={tasks}
            openModal={() => setIsModalOpen(true)}
            toggleTask={toggleTask}
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