// Home.js
import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component"; // Import from 'react-flickity-component'
import "flickity/css/flickity.css";
import { Link, useNavigate } from "react-router-dom";
import Bsckuzum from "../images/backroudnuzm.svg";
import Bag from "../images/bag.svg";
import axios from "axios";
import Uzumback from "../images/uzumbac2.jpg";
import Star from "../images/Star.svg";
const Home = () => {
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
        <div className="container">
          <div className="slider__box">
            <Flickity
              className="Slider"
              elementType="div"
              disableImagesLoaded={false}
              options={flickityOptions}
              reloadOnUpdate
              static
            >
              <div className="slide">
                <img className="slide__img" src={Bsckuzum} alt="uzum" />
              </div>
              <div className="slide">
                <img className="slide__img" src={Uzumback} alt="uzum" />
              </div>
              <div className="slide">
                <img className="slide__img" src={Bsckuzum} alt="uzum" />
              </div>
            </Flickity>

            <div className="cards">
              <ul className="cards__box">
                {data.map(function (el) {
                  return (
                    <li
                      className="cards__list"
                      onClick={() => {
                        navigate(`/help/${el.id}`);
                      }}
                    >
                      <img
                        className="cards__list-image"
                        src={el.image}
                        alt=""
                      />

                      <p className="cards__text">{el.title}</p>

                      <div className="cards__min-box">
                        <p className="cards__min-box-text">
                          <img className="carsd__star" src={Star} alt="Star" />
                          {el.rating.rate} ({el.rating.rate} baho)
                        </p>
                      </div>
                      <del>{el.rating.count}00 so’m</del>
                      <span className="cards__mark-box">
                        <mark> {el.price} 000 so’m</mark>
                        <img className="cards__img-bag" src={Bag} alt="bag" />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
