import React from "react";

const LaLista = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default LaLista;







/* import React from "react";

const LosResultados = props => {
    const { hacerLaCama, Banarse, Vestirse, Desayunar } = props.data;
    return (
        <div>
            <h2>Resultados</h2>
            <p>First Name: {hacerLaCama} </p>
            <p>Last Name: {Banarse} </p>
            <p>Email: {Vestirse} </p>
            <p>Password: {Desayunar} </p>
        </div>
    )
}

export default LosResultados; */