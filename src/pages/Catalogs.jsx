// Catalog.js
import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { Link, useNavigate } from "react-router-dom";
import Bsckuzum from "../images/backroudnuzm.svg";
import Bag from "../images/bag.svg";
import axios from "axios";
import Uzumback from "../images/uzumbac2.jpg";
import Star from "../images/Star.svg";

const Catalog = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const flickityOptions = {
    initialIndex: 2,
  };

  return (
    <>
      <div className="App">
        <div className="container">{/* ... sizning mavjud kodingiz ... */}</div>
      </div>
    </>
  );
};

export default Catalog;
