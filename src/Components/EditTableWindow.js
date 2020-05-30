import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './EditTableWindow.css'

export default function EditTableWindow(props) {
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Table:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Table #: </p>
            <p>
              Seat Capacity: <input type="number" id="seat-cap" min="1" max="100"></input>
            </p>
            <p>
                Table Size: <input type="number" id="table-size" min="1" max="100"></input>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div id = "remove">
              <Button variant = "danger" onClick={props.onHide}>Remove Table</Button>
            </div>
            <Button variant = "light" onClick={props.onHide}>Cancel</Button>
            <Button variant = "success" onClick={props.onHide}>Ok</Button>
          </Modal.Footer>
        </Modal>
      );
  }

