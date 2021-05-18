import "bootstrap/dist/css/bootstrap.min.css";
import Consoles from "./components/consoles"
import Row from 'react-bootstrap/Row'
import './App.css';
import Col from 'react-bootstrap/Col'

function App() {

  

  return (
    <div className="container fluid">
      <Row>
    <Col><Consoles/></Col>
  </Row>
    </div>
  );
}

export default App;
