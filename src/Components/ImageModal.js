import React from "react";
import { Modal } from "react-bootstrap";

function ImageModal({ show, breedImage, onHide }) {
  return (
    <Modal onHide={onHide} show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <img width="100%" height="100%" src={breedImage}></img>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;
