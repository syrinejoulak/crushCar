import React from "react";

import { ListGroupItemHeading } from "reactstrap";

const PostedBy = ({ name }) => {
  
  return <ListGroupItemHeading>{name}</ListGroupItemHeading>;
};

export default PostedBy;
