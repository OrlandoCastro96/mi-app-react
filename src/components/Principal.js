import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function Principal() {
    return (
      <Container fluid className="App">
        <Row>
          <Col>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Página hecha con <code>React</code>.</p>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default Principal;