import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React from 'react'

export default function AddTableWindow(props) {
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Table
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Table #: </p>
            <p>
              Seat Capacity: <input type="number" id="seat-cap" min="1" max="100"></input>
            </p>
            <p>
                Table Size:   Length: <input type="number" min="1" max="100"></input> Width: <input type="number" min="1" max="100"></input>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant = "light" onClick={props.onHide}>Cancel</Button>
            <Button variant = "success" onClick={props.onHide}>Ok</Button>
          </Modal.Footer>
        </Modal>
      );
  }
  
