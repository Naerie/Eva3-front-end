"use client"

import { useState } from "react";
import { Proyecto } from "./interfaces/IProyecto";

const initialStateProyecto:Proyecto = {
  nombre:"",
  presupuesto:0,
  fecha:"",
  tipo:"",
  descripcion:""
}
export default function Home() {
  const miStorage = window.localStorage
  const [proyectos, setproyectos] = useState<Proyecto[]>([])
  const [proyecto, setproyecto] = useState(initialStateProyecto)
    
  const handleRegistrar = ()=>{
    miStorage.setItem("proyectos", JSON.stringify([...proyectos, proyecto])) 
    }

  const handleProyecto = (name:string, value:string)=>{setproyecto(
    {...proyecto, [name]:value})
    if(name == "presupuesto" && Number(value) <= 0){
      console.log("el presupuesto debe ser mayor a 0")
    }
  
    }

  return (
    <>
      <h1>Bienvenido al sistema de gestión</h1>
        <form>
          <h3>Registrar proyecto</h3>
          <label>Nombre: </label>
          <input 
          type="text" name="nombre"    placeholder="Nombre del proyecto"
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Presupuesto: </label>
          <input 
          type="number" 
          name="presupuesto" 
          placeholder="100000"
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Fecha: </label>
          <input 
          type="date" 
          name="fecha" 
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Tipo: </label>
          <select 
          name="opcionesTipo" 
          id=""
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}>
            <option value="">Seleccione</option>
            <option value="">Comunidad</option>
            <option value="">Educación</option>
            <option value="">Salud</option>
          </select><br/>

          <label htmlFor="">Descripción</label><br/>
          <textarea 
          name="descripcion" 
          id=""
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}></textarea><br/>

          <button
          onClick={()=>handleRegistrar()}>Registrar</button>
        </form>
    </>
  );
}
