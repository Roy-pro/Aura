import { useState, useEffect } from "react";

function TaskModal({
  closeModal,
  addTask,
  updateTask,
  editingTask,
}) {

    const [title, setTitle] = useState("");

    const [date, setDate] = useState("");

    const [time, setTime] = useState("");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDate(editingTask.date);
            setTime(editingTask.time);
        } else {
            setTitle("");
            setDate("");
            setTime("");
        }
        }, [editingTask]);

    const handleSubmit = () => {

        if (!title.trim()) return;

        if (editingTask) {

            updateTask({

                ...editingTask,

                title,
                date,
                time,

            });

        } else {

            addTask({

                id: Date.now(),

                title,
                date,
                time,

                completed:false,

            });

        }

        setTitle("");
        setDate("");
        setTime("");

        closeModal();

    };

    return (

        <div className="modal-overlay" onClick={closeModal}>

            <div className="task-modal" onClick={(e) => e.stopPropagation()}>

    <div className="drag-handle"></div>

    <h2>
        {editingTask ? "Edit Task" : "New Task"}
    </h2>

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

        <button className="create-button" onClick={handleSubmit}>
            {editingTask ? "Save Changes" : "Create Task"}
        </button>

    </div>

</div>

        </div>

    );

}

export default TaskModal;