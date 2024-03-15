import React, { useState, useEffect } from 'react';

const Buscador = ({ datosOriginales, setColaboradores }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const result = e.target.value
            ? datosOriginales.filter((dato) =>
            JSON.stringify(dato).toLowerCase().includes(e.target.value.toLowerCase())
              )
            : datosOriginales;
        setColaboradores(result);
    };
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder='Buscar'
                    value={search}
                    onChange={handleSearch}
                />
            </form>
        </div>
    );
};

export default Buscador;