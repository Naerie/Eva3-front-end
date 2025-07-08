import React, { useEffect, useState } from 'react'
import { Proyecto } from '@/app/interfaces/IProyecto'
import { Props } from '@/app/interfaces/IProps'

export const Mostrarproyectos = (props:Props) => {
  const miStorage = window.localStorage
  const [Proyectos, setProyectos] = useState<Proyecto[]>([])
  
  useEffect(() => {
    let listadoStr = miStorage.getItem("proyectos")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setProyectos(listado)
      console.log(Proyectos)
    }
    }, [])
    const editar = (index:number)=> {
      const proyectoAEditar = Proyectos[index]
      props.traerProyecto(proyectoAEditar, index)

    }
    const eliminar = (index:number)=>{
      const proyectoE = Proyectos[index]
      let confirmacionEliminar = confirm(`Está seguro que desea eliminar el proyecto ${proyectoE.nombre}`)
      
      if (confirmacionEliminar){
        props.eliminarProyecto(index)
      }}

      
  return (
    <>
      <h2>Proyectos</h2>
      <table>
        <thead>
          <th>Nombre</th>
          <th>Presupuesto</th>
          <th>Fecha</th>
          <th>Tipo de proyecto</th> 
          <th>Descripción</th>
          <th>Acción</th>
        </thead>
        <tbody>
          {Proyectos.map((p,index)=>{
            return(
              <tr>
                <td>{p.nombre}</td>
                <td>{p.presupuesto}</td>
                <td>{p.fecha}</td>
                <td>{p.tipo}</td>
                <td>{p.descripcion}</td>
                <td><button onClick={()=>editar(index)}>Editar</button>
                <button onClick={()=>eliminar(index)}>Eliminar</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Mostrarproyectos 