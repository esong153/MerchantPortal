import React from 'react'
import Button from 'react-bootstrap/Button'
import TableIcon from './TableIcon.js'
import AddTableWindow from './AddTableWindow.js'
import ExistingTableWindow from './ExistingTableWindow.js'
import EditTableWindow from './EditTableWindow.js'
import './TableView.css'

export default function TableView() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div id='container'>
      <div id='button'>
        <Button variant="success" onClick={() => setModalShow2(true)} >
          Add Table
        </Button>
      </div>

      <AddTableWindow
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      ></AddTableWindow>

      <ExistingTableWindow
        openOther={() => setModalShow1(true)}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <EditTableWindow
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      ></EditTableWindow>

      <p id='tables'>
        <TableIcon clicked={() => setModalShow(true)} label="A1" width="150px" chairNum='4'></TableIcon>
        <TableIcon clicked={() => setModalShow(true)} label="A2" width="150px" chairNum='4'></TableIcon>
        <TableIcon clicked={() => setModalShow(true)} label="B1" width="350px" chairNum='4'></TableIcon>
        <TableIcon clicked={() => setModalShow(true)} label="A3" width="150px" chairNum='4'></TableIcon>
        <TableIcon clicked={() => setModalShow(true)} label="A4" width="150px" chairNum='4'></TableIcon>
        <TableIcon clicked={() => setModalShow(true)} label="B" width="350px" chairNum='4'></TableIcon>
      </p>
    </div>
  );
}
