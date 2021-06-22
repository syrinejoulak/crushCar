import React, { useState, useContext } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { AuthContext } from "../context/auth-context";

import { Link } from "react-router-dom";

import "../../Home/components/CarItem.css";

import { FaRegComments } from "react-icons/fa";

import Comment from "./Comments";

const ReadComment = ({ id, carComments }) => {
  const [modal, setModal] = useState(false);

  const auth = useContext(AuthContext);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button className="read-btn" onClick={toggle}>
        <FaRegComments /> Read comments
      </button>
      {!auth.isLoggedIn ? (
        <Modal isOpen={modal}>
          <ModalHeader>Add a comment</ModalHeader>
          <ModalBody>
            Sorry, you need to be logged in to read comments.
          </ModalBody>
          <ModalFooter>
            <Link to="/login">
              {" "}
              <Button color="success" onClick={toggle}>
                Login
              </Button>{" "}
            </Link>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        <Modal isOpen={modal}>
          <Comment carComments={carComments} id={id} toggle={toggle} />
        </Modal>
      )}
    </>
  );
};

export default ReadComment;
