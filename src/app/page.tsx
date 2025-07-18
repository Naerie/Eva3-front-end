"use client"
import Mostrarproyectos from "@/pages/Mostrarproyectos";

import { useEffect, useState } from "react";
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
  const [Proyectos, setProyectos] = useState<Proyecto[]>([])
  const [Proyecto, setProyecto] = useState(initialStateProyecto)
  const [ProyectoA, setProyectoA] = useState(initialStateProyecto)
  const [indiceA, setIndiceA] = useState<number | null>(null)

  useEffect(() => {
    let listadoStr = miStorage.getItem("proyectos")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setProyectos(listado)
      console.log(Proyectos)
    }
  }, [])
  
    
  const handleRegistrar = ()=>{
    miStorage.setItem("proyectos", JSON.stringify([...Proyectos,Proyecto])) 
    }

  const handleProyecto = (name:string, value:string)=>{
    setProyecto(
    {...Proyecto, [name]:value}) 
    }

    const handleActualizar = (index: number | null) => {
      const proyectoActualizado = Proyectos.map((p,indice)=>{
        if(index == indice){
          return ProyectoA
        }
        return p
      })
    
      setProyectos(proyectoActualizado)
      miStorage.setItem("proyectos", JSON.stringify(proyectoActualizado))
      setProyectoA(initialStateProyecto)
      setIndiceA(null)
    };
    

  const traerProyecto = (p:Proyecto, index:number)=>{
    setProyectoA(p),
    setIndiceA(index)
  }


  const handleProyectoA = (name:string, value:string)=>{
    setProyectoA({...ProyectoA, [name]:value}) 
    }
  
    const handleEliminar = (index:number)=>{
      const listaActualizada = Proyectos.filter((p,indice) => indice !== index)
      setProyectos(listaActualizada)
      miStorage.setItem("proyectos",JSON.stringify(listaActualizada))
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
          name="tipo" 
          id=""
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}>
            <option value="">Seleccione</option>
            <option value="Comunidad">Comunidad</option>
            <option value="Educación">Educación</option>
            <option value="Salud">Salud</option>
          </select><br/>

          <label htmlFor="">Descripción</label><br/>
          <textarea 
          name="descripcion" 
          id=""
          onChange={(e)=>{handleProyecto(e.currentTarget.name, e.currentTarget.value)}}></textarea><br/>

          <button
          onClick={()=>handleRegistrar()}>Registrar</button>
        </form>

        <Mostrarproyectos
         traerProyecto={traerProyecto} eliminarProyecto={handleEliminar} proyectos={Proyectos} />

        <h3>Actualizar proyecto</h3>
        <form>
          <label>Nombre: </label>
          <input 
          type="text" 
          name="nombre"    
          placeholder="Nombre del proyecto"
          value={ProyectoA.nombre}
          onChange={(e)=>{handleProyectoA(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Presupuesto: </label>
          <input 
          type="number" 
          name="presupuesto" 
          placeholder="100000"
          value={ProyectoA.presupuesto}
          onChange={(e)=>{handleProyectoA(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Fecha: </label>
          <input 
          type="date" 
          name="fecha"
          value={ProyectoA.fecha} 
          onChange={(e)=>{handleProyectoA(e.currentTarget.name, e.currentTarget.value)}}/><br/>

          <label>Tipo: </label>
          <select 
          name="tipo" 
          id=""
          value={ProyectoA.tipo}
          onChange={(e)=>{handleProyectoA(e.currentTarget.name, e.currentTarget.value)}}>
            <option value="">Seleccione</option>
            <option value="Comunidad">Comunidad</option>
            <option value="Educación">Educación</option>
            <option value="Salud">Salud</option>
          </select><br/>

          <label htmlFor="">Descripción</label><br/>
          <textarea 
          name="descripcion" 
          id=""
          value={ProyectoA.descripcion}
          onChange={(e)=>{handleProyectoA(e.currentTarget.name, e.currentTarget.value)}}></textarea><br/>

          <button
          onClick={(e)=>handleActualizar(indiceA)}>Actualizar</button>
        </form>
    </>
  );
}
