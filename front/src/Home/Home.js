import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getCars } from "../redux/Actions/Action";
import CarsList from "./components/CarsList";

import "./Home.css";

const Home = () => {
  const cars = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="cars-list">
      <CarsList cars={cars} />
    </div>
  );
};

export default Home;
