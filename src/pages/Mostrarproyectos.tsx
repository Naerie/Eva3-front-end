import React, { useEffect, useState } from 'react'
import { Proyecto } from '@/app/interfaces/IProyecto'

export default function Mostrarpersonas() {
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
                <td>{p.descripcion}</td>
                <td>{p.presupuesto}</td>
                <td>{p.fecha}</td>
                <td>{p.tipo}</td>
                <td>{p.descripcion}</td>
                <td><button>Editar</button><button>Eliminar</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
