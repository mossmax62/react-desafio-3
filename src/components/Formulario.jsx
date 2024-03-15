import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Button } from 'react-bootstrap';
const Formulario = ({agregarColaborador, setError}) => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setcorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    
    const handleNombre = (e) => {
        setNombre(e.target.value);
    };
    
    const handleApellido = (e) => {
        setApellido(e.target.value);
    };
    
    const handlecorreo = (e) => {
        setcorreo(e.target.value);
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

        if (!nombre || !apellido || !correo || !edad || !cargo || !telefono) {
            setError({ message: "Todos los campos son obligatorios", color: "danger" });
        }else if (edad < 18) {
            setError({ message: "La edad debe ser mayor a 18 años", color: "danger" });
        }else if (telefono.length < 10) {
            setError({ message: "El teléfono debe tener al menos 10 dígitos", color: "danger" });
        }else if (!correo.includes('@')) {
            setError({ message: "El correo debe ser válido", color: "danger" });
        }else if (correo.includes(' ')) {
            setError({ message: "El correo no debe contener espacios", color: "danger" });
        }else {
        agregarColaborador(
            {
                id: uuidv4(),
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                edad: edad,
                cargo: cargo,
                telefono: telefono
            }
        );
        
        setNombre('');
        setApellido('');
        setcorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
        setError({ message: "Colaborador agregado con éxito", color: "success" });
    }
    };
    
    return (
        <form onSubmit={handleSubmit} className="mb-3">
        <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombre}
            className="form-control mb-2"
        />
        <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={handleApellido}
            className="form-control mb-2"
        />
        <input
            type="correo"
            placeholder="correo"
            value={correo}
            onChange={handlecorreo}
            className="form-control mb-2"
        />
        <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={handleEdad}
            className="form-control mb-2"
        />
        <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={handleCargo}
            className="form-control mb-2"
        />
        <input
            type="number"
            placeholder="Telefono"
            value={telefono}
            onChange={handleTelefono}
            className="form-control mb-2"
        />
        <div className="d-grid gap-2">
                    <Button variant="success" 
                    type="submit" >Registrate</Button>
                    </div>

        </form>
    );
    };


    
export default Formulario;