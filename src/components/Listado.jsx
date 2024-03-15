
import React from "react";
import { useState } from "react";
const Listado = ({colaboradores}) => {
    console.log(colaboradores);
    
    return (
        <>
        <h1>Listado de Colaboradores</h1>
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
            </tr>
        </thead>
        <tbody>
            {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </>
    );
    } 
export default Listado;