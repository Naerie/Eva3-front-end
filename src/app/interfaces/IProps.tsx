import { Proyecto } from "./IProyecto";

export interface Props{
    traerProyecto:(p:Proyecto, index:number) => void,
    eliminarProyecto:(index:number) => void
}