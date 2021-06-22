import React, { useState, useContext } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { addComment } from "../../redux/Actions/Action";

import { AuthContext } from "../context/auth-context";

import { Link } from "react-router-dom";

import "../../Home/components/CarItem.css";

const AddComment = ({ id }) => {
  const [modal, setModal] = useState(false);
  const auth = useContext(AuthContext);

  const userId = auth.userId;
  const userName = useSelector((state) => state.user);

  console.log("uid", userId)
  console.log("un", userName)

  const [formData, setFormData] = useState({
    comment: "",
    postedBy: userId,
    name: userName,
  });

  console.log("fd", formData)

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log("usern", userName);
  console.log("foda", formData);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const addCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(id, formData));
    toggle();
  };

  return (
    <>
      <button className="comment-btn" onClick={toggle}>
        Add a comment
      </button>

      <Modal isOpen={modal}>
        <ModalHeader>Add a comment</ModalHeader>
        {!auth.isLoggedIn ? (
          <React.Fragment>
            <ModalBody>
              Sorry, you need to be logged in to add a comment.
            </ModalBody>
            <ModalFooter>
              <Link to="/login">
                {" "}
                <Button color="success">Login</Button>{" "}
              </Link>
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ModalBody>
              {" "}
              <Form>
                <FormGroup>
                  <Label for="exampleText">Write your comment</Label>
                  <Input
                    type="textarea"
                    name="comment"
                    value={formData.comment}
                    onChange={onChangeHandler}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={addCommentHandler}>
                Comment
              </Button>{" "}
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </React.Fragment>
        )}
      </Modal>
    </>
  );
};

export default AddComment;
