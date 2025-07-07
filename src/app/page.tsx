"use client"

import { Proyecto } from "./interfaces/IProyecto";

const initialStateProyecto:Proyecto = {
  nombre:"",
  presupuesto:0,
  fecha:"",
  tipo:"",
  descripcion:""
}
export default function Home() {
  return (
    <>
    <h1>Bienvenido al sistema de gestión</h1>
      <form>
        <h3>Registrar proyecto</h3>
        <label>Nombre: </label>
        <input type="text" name="nombre" placeholder="Nombre del proyecto"/><br/>
        <label>Presupuesto: </label>
        <input type="number" name="presupuesto" placeholder="100000"/><br/>
        <label>Fecha: </label>
        <input type="date" name="fecha" /><br/>
        <label>Tipo: </label>
        <select name="opcionesTipo" id="">
          <option value="">Seleccione</option>
          <option value="">Comunidad</option>
          <option value="">Educación</option>
          <option value="">Salud</option>
        </select><br/>
        <label htmlFor="">Descripción</label><br/>
        <textarea name="descripcion" id=""></textarea><br/>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}
