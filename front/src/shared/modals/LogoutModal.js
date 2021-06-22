import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { logout } from "../../redux/Actions/Action";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const LogoutModal = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const logoutHandler = () => {
    dispatch(logout());
    toggle();
  };

  return (
    <div>
      <i onClick={toggle} className="navbar-li">
        <h6>Logout</h6>
      </i>

      <Modal isOpen={modal} toggle={logout}>
        <ModalHeader>Logout</ModalHeader>
        <ModalBody>Are you sure you want to Logout?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={logoutHandler}>
            Logout
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LogoutModal;
