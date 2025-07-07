"use client"
export default function Home() {
  return (
    <>
    <h1>Bienvenido al sistema de gestión</h1>
      <form>
        <h3>Registrar proyecto</h3>
        <label>Nombre: </label>
        <input type="text" /><br/>
        <label>Presupuesto: </label>
        <input type="number" /><br/>
        <label>Fecha: </label>
        <input type="date" name="" id="" /><br/>
        <label>Tipo: </label>
        <select name="" id="">
          <option value="">Seleccione</option>
          <option value="">Comunidad</option>
          <option value="">Educación</option>
        </select><br/>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}
