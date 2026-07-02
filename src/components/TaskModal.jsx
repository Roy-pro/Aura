import { useState } from "react";

function TaskModal({ closeModal, addTask }) {

    const [title, setTitle] = useState("");

    const [date, setDate] = useState("");

    const [time, setTime] = useState("");

    const handleCreateTask = () => {

        if (!title.trim()) return;

        const newTask = {

            id: Date.now(),

            title,

            date,

            time,

            completed: false,

        };

        addTask(newTask);

        setTitle("");
        setDate("");
        setTime("");

        closeModal();

    };

    return (

        <div className="modal-overlay" onClick={closeModal}>

            <div className="task-modal" onClick={(e) => e.stopPropagation()}>

    <div className="drag-handle"></div>

    <h2>New Task</h2>

    <label>Task</label>

    <input

        value={title}

        onChange={(e)=>setTitle(e.target.value)}

        placeholder="What needs to be done?"

    />

    <label>Date</label>

    <input

        type="date"

        value={date}

        onChange={(e)=>setDate(e.target.value)}

    />

    <label>Time</label>

    <input

        type="time"

        value={time}

        onChange={(e)=>setTime(e.target.value)}

    />
    <div className="modal-buttons">

        <button onClick={closeModal}>
            Cancel
        </button>

        <button className="create-button" onClick={handleCreateTask}>
            Create Task
        </button>

    </div>

</div>

        </div>

    );

}

export default TaskModal;