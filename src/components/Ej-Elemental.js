import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from  'react';

function EjElemental() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    let values;

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Ejercicio 1
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ejercicio 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>¡Hola mundo!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={values} placeholder="Ingrese su nombre..." />
            </Form.Group>
            <Button variant="primary" onClick={handleShow2}>
                Ejercicio 2
            </Button>
        </Form>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Ejercicio 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>¡Hola {values}!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }

export default EjElemental;