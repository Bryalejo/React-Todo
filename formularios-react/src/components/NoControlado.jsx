import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("")
  const HandleSubmit = (e) => {
    e.preventDefault();
    setError('')
    //capturar datos

    const data = new FormData(form.current);
    console.log([...data.entries()]);
    const {title, description, state} = Object.fromEntries([...data.entries()]);
    
    //validar los datos
    if(!title.trim() || !description.trim() || !state.trim()) return setError("Llena este campo");
    
    //enviar los datos
    console.log(title, description, state);
  };

  return (
    <form onSubmit={HandleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="todo #01"
        
        
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
        defaultValue="descripcion#1"
      ></textarea>
      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {
        error !== '' && error 
      }
    </form>
  );
};

export default NoControlado;
