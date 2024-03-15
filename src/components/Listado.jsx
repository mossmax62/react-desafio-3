
import React from "react";
const Listado = ({colaboradores,eliminarColaborador}) => {
    (colaboradores);
    
    return (
        <>
        <h1>Listado de Colaboradores</h1>
        <div className="table-responsive">
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre} {colaborador.apellido} </td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td><button onClick={() => eliminarColaborador(colaborador.correo)} className="btn btn-danger">Eliminar</button></td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        </>
    );
    } 
export default Listado;