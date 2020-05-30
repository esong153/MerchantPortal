import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import React from 'react'
import TableSettingWindow from './EditTableWindow.js'
import './ExistingTableWindow.css'


function ExistingTableWindow(props) {
  return (
    <>
      <TableSettingWindow></TableSettingWindow>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Table: A3
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="middle">
            <div>
              <p> Order Detail: </p>
              <p>
                Pork Feet Noodles       $ 9.50  <input type="number" id="seat-cap" min="1" max="100"></input> <Button variant="danger"> X </Button>
              </p>
              <p id="description">
                Egg soup, less spicy
            </p>
              <p>
                Twice Cooked Pork       $ 10.34  <input type="number" id="table-size" min="1" max="100"></input> <Button variant="danger"> X </Button>
              </p>
              <p>
                Fish in Chili Sauce     $ 2.10  <input type="number" id="table-size" min="1" max="100"></input> <Button variant="danger"> X </Button>
              </p>
            </div>

            <div id='vbuttons'>
              <ButtonGroup vertical>
                <Button variant="success">Print Order</Button>
                <Button variant="success">Print Invoice</Button>
                <Button variant="success">Add Item</Button>
                <Button variant="success">End Order</Button>
                <Button variant="success">Switch Table</Button>
                <Button variant="success" onClick={props.onHide} onClick={props.openOther} >Table Setting</Button>
              </ButtonGroup>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div id='bottom'>
            <p>
              Subtotal: $ 54.98
                </p>
            <p>
              Discount: - $ <input type="number" id="table-size" min="1" max="100"></input>
            </p>
            <p>
              Tax: $ 2.50
                </p>
            <p>
              Order Total: $ 57.50
                </p>
          </div>
          <Button variant="light" onClick={props.onHide}>Cancel</Button>
          <Button variant="success" onClick={props.onHide}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExistingTableWindow