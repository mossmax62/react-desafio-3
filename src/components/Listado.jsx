
import React from "react";
import { useState } from "react";
const Listado = ({colaboradores}) => {
    console.log(colaboradores);
    
    return (
        <>
        <h1>Listado de Colaboradores</h1>
        <table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
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