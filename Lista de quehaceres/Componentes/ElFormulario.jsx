import React from "react";

const ElFormulario = ({ handleSubmit, todo, editId, setTodo }) => {
    return (
        <form className="ElFormulario" onSubmit={handleSubmit}>
            <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit"> {editId ? "Edit" : "Add"}</button>
        </form>
    );
};

export default ElFormulario;