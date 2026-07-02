import { Plus } from "lucide-react";

function AddTask({ openModal }) {

    return (

        <button
            className="add-button"
            onClick={openModal}
        >
            <Plus size={28} />
        </button>

    );

}

export default AddTask;