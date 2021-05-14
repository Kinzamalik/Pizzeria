import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function Modal1(props) {
    return (
        <div>


            <Modal show={props.showModal} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, You Product has been added to cart!</Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={() => props.handleClose()}>
                       Close
            </Button>
            <Button variant="primary" onClick={() => props.handleShowCart()}>
                       Show Cart
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modal1