import React from "react";
import { useSelector } from "react-redux";

import AddComment from "../../shared/modals/AddComment";

import ReadComment from "../../shared/modals/ReadComment";

import "./CarItem.css";

const CarItem = ({ name, image, id }) => {
  const { carComments, loadingCarComments } = useSelector((state) => state);

  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <div className="car-info">
        <h3 className="car-name">{name}</h3>
        <div className="btn-container">
          <AddComment id={id} />
          <ReadComment id={id} carComments={carComments} loadingCarComments ={loadingCarComments} />
        </div>
      </div>
    </div>
  );
};

export default CarItem;
