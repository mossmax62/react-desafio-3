import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import { BaseColaboradores } from "./components/BaseColaboradores"
import { useState } from "react"
import Buscador from "./components/Buscador"
import Alert from "./components/Alert"

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [datosOriginales, setDatosOriginales] = useState(BaseColaboradores)
  const [error, setError] = useState(null)
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores(prevColaboradores => [...prevColaboradores, nuevoColaborador]);
    setDatosOriginales(prevDatosOriginales => [...prevDatosOriginales, nuevoColaborador]);
  }
  return (
    <>
    <Buscador datosOriginales={datosOriginales} 
    setColaboradores={setColaboradores} />
    <Formulario agregarColaborador={agregarColaborador} setError={setError} />
    {error && <Alert message={error.message} color={error.color} />}
    <Listado colaboradores={colaboradores}/>
   
    </>
  )
}

export default App
