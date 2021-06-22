import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { readComment } from "../../redux/Actions/Action";

import { ListGroupItem, ListGroup } from "reactstrap";
import CommentItems from "./CommentItems";

import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Comments = ({ id, carComments, toggle }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readComment(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <ModalHeader>Read comments</ModalHeader>
      {carComments.length > 0 ? (
        <React.Fragment>
          {carComments.map((carObj) => {
            return (
              <React.Fragment>
                <ListGroup>
                  <ListGroupItem>
                    <CommentItems
                      userId={carObj.postedBy}
                      comment={carObj.comment}
                      name={carObj.name}
                    />
                  </ListGroupItem>
                </ListGroup>
              </React.Fragment>
            );
          })}
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ModalBody>
            No comments yet! <br /> Be the first to share what you think!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Comments;
