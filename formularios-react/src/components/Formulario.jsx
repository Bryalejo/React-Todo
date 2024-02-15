import { useState } from "react";
import  Swal from 'sweetalert2'
const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Todo01",
    description: "Descripcion01",
    state: "pendiente",
    priority: true,
  });
    const {title, description, state, priority} =todo;
  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim()  || !description.trim() ){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "LLene todo los campos",
      });
    }
    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'completado'
    })
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado con exito",
      showConfirmButton: false,
      timer: 1500
    });
    

    //validar los datos
  };
  const HandleChange = (e) => {
    const {name, type, checked, value}= e.target
    setTodo({
      ...todo,
      [name]:
        type === "checkbox" ? checked : value,
    });
  };
  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={HandleChange}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
        value={todo.description}
        onChange={HandleChange}
      ></textarea>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={todo.priority}
          onChange={HandleChange}
        />
        Dar prioridad
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={HandleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default Formulario;
