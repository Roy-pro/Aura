import { useState, useEffect } from "react";

function TaskModal({
  closeModal,
  addTask,
  updateTask,
  editingTask,
}) {

    const [title, setTitle] = useState("");

    const [notes, setNotes] = useState("");

    const [priority, setPriority] = useState("Medium");

    const [category, setCategory] = useState("Personal");

    const [date, setDate] = useState("");

    const [time, setTime] = useState("");

    useEffect(() => {

    if(editingTask){

        setTitle(editingTask.title);

        setNotes(editingTask.notes || "");

        setPriority(editingTask.priority || "Medium");

        setCategory(editingTask.category || "Personal");

        setDate(editingTask.date);

        setTime(editingTask.time);

    }

    else{

        setTitle("");

        setNotes("");

        setPriority("Medium");

        setCategory("Personal");

        setDate("");

        setTime("");

    }

},[editingTask]);

    const handleSubmit = () => {

        const cleanTitle = title.trim();

        if (!cleanTitle) {
            alert("Please enter a task title.");
            return;
        }

        if (cleanTitle.length > 80) {
            alert("Task title must be under 80 characters.");
            return;
        }

        if (!date) {
            alert("Please choose a date.");
            return;
        }

        if (!time) {
            alert("Please choose a time.");
            return;
        }

        if (editingTask) {

            updateTask({
            ...editingTask,
            title: cleanTitle,
            notes,
            priority,
            category,
            date,
            time,
            });

        } else {

            addTask({
            id: Date.now(),
            title: cleanTitle,
            notes,
            priority,
            category,
            date,
            time,
            completed: false,
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

<div className="modal-row">

    <div className="field">

        <label>Date</label>

        <input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
        />

    </div>

    <div className="field">

        <label>Time</label>

        <input
            type="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
        />

    </div>

</div>

<div className="modal-row">

    <div className="field">

        <label>Priority</label>

        <div className="priority-group">

            {["Low","Medium","High"].map(level => (

                <button
                    key={level}
                    type="button"
                    className={`chip ${
                        priority===level
                            ? `active ${level.toLowerCase()}`
                            : ""
                    }`}
                    onClick={()=>setPriority(level)}
                >
                    {level}
                </button>

            ))}

        </div>

    </div>

    <div className="field">

        <label>Category</label>

        <div className="category-group">

            {["Personal","Work","Study","Health"].map(item => (

                <button
                    key={item}
                    type="button"
                    className={`chip ${
                        category===item
                            ? "active category"
                            : ""
                    }`}
                    onClick={()=>setCategory(item)}
                >
                    {item}
                </button>

            ))}

        </div>

    </div>

</div>

<div className="input-group">

  <label>Notes</label>

  <textarea
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Add extra details..."
    rows={3}
  />

</div>

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