import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import { BaseColaboradores } from "./components/BaseColaboradores"
import { useState } from "react"
import Buscador from "./components/Buscador"
import Alert from "./components/Alert"
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [datosOriginales, setDatosOriginales] = useState(BaseColaboradores)
  const [error, setError] = useState(null)
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores(prevColaboradores => [...prevColaboradores, nuevoColaborador]);
    setDatosOriginales(prevDatosOriginales => [...prevDatosOriginales, nuevoColaborador]);
  }
  
  const eliminarColaborador = (correo) => {
    setColaboradores(prevColaboradores => prevColaboradores.filter(colaborador => colaborador.correo !== correo));
    setDatosOriginales(prevDatosOriginales => prevDatosOriginales.filter(colaborador => colaborador.correo !== correo));
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Buscador datosOriginales={datosOriginales} setColaboradores={setColaboradores} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
          By Max Mussuto 2024
            <Listado colaboradores={colaboradores}
            eliminarColaborador={eliminarColaborador} />
          </Col>
          <Col xs={12} md={4}>
          <div style={{width: '100%'}}>
            <Formulario agregarColaborador={agregarColaborador} setError={setError} />
              {error && <Alert message={error.message} color={error.color} />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
