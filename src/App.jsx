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
          <Listado colaboradores={colaboradores}/>
        </Col>
        <Col xs={12} md={4}>
          <Formulario agregarColaborador={agregarColaborador} setError={setError} />
          {error && <Alert message={error.message} color={error.color} />}
        </Col>
      </Row>
    </Container>

  </>
  );
}

export default App
