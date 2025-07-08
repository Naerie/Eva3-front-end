import React, { useEffect, useState } from 'react'
import { Proyecto } from '@/app/interfaces/IProyecto'
import { Props } from '@/app/interfaces/IProps'

export const Mostrarproyectos = (props:Props) => {

    const editar = (index:number)=> {
      const proyectoAEditar = props.proyectos[index]
      props.traerProyecto(proyectoAEditar, index)

    }
    const eliminar = (index:number)=>{
      const proyectoE = props.proyectos[index]
      let confirmacionEliminar = confirm(`Está seguro que desea eliminar el proyecto ${proyectoE.nombre}`)
      
      if (confirmacionEliminar){
        props.eliminarProyecto(index)
      }}

      
  return (
    <>
      <h2>Proyectos</h2>
      <table>
        <thead>
          <tr>
          <th>Nombre</th>
          <th>Presupuesto</th>
          <th>Fecha</th>
          <th>Tipo de proyecto</th> 
          <th>Descripción</th>
          <th>Acción</th></tr>
        </thead>
        <tbody>
          {props.proyectos.map((p,index)=>( 
              <tr key={index}>
                <td>{p.nombre}</td>
                <td>{p.presupuesto}</td>
                <td>{p.fecha}</td>
                <td>{p.tipo}</td>
                <td>{p.descripcion}</td>
                <td><button onClick={()=>editar(index)}>Editar</button>
                <button onClick={()=>eliminar(index)}>Eliminar</button></td>
              </tr>
            
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Mostrarproyectos 