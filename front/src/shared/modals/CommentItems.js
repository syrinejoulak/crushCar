import React from "react";

import { ListGroupItemHeading, ListGroupItemText, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";

const CommentItems = ({ comment, name }) => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={2}>
          <Image
            src="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG.png"
            style={{ width: "2.5rem", background: "#E8E8E8", padding: "10px" }}
            roundedCircle
          />
        </Col>
        <ListGroupItemHeading sm={8} style={{ color: "#696969" }}>
          {name}
        </ListGroupItemHeading>
      </Row>

      <ListGroupItemText
        style={{
          color: "black",
          textAlign: "left",
          paddingTop: "15px",
          textDecoration: "none",
        }}
      >
        {comment}
      </ListGroupItemText>
    </React.Fragment>
  );
};

export default CommentItems;
