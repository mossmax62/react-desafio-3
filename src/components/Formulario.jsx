import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
const Formulario = ({agregarColaborador}) => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    
    const handleNombre = (e) => {
        setNombre(e.target.value);
    };
    
    const handleApellido = (e) => {
        setApellido(e.target.value);
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleEdad = (e) => {
        setEdad(e.target.value);
    }
    const handleCargo = (e) => {
        setCargo(e.target.value);
    }
    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, apellido, email);
        agregarColaborador(
            {
                id: uuidv4(),
                nombre: nombre,
                apellido: apellido,
                email: email,
                edad: edad,
                cargo: cargo,
                telefono: telefono
            }
        );
        
        setNombre('');
        setApellido('');
        setEmail('');
        setEdad('');
        setCargo('');
        setTelefono('');
        
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombre}
        />
        <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={handleApellido}
        />
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
        />
        <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={handleEdad}
        />
        <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={handleCargo}
        />
        <input
            type="number"
            placeholder="Telefono"
            value={telefono}
            onChange={handleTelefono}
        />
        <button type="submit">Enviar</button>
        </form>
    );
    }
export default Formulario;