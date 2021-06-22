import React from "react";
import CarItem from "./CarItem";
import "./CarsList.css";

const CarsList = ({ cars }) => {
  return (
    <div>
      <ul className="cars-list">
        {cars.map((car, i) => (
          <li key={i}>
            <CarItem id={car._id} image={car.image} name={car.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
