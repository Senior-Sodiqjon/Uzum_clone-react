import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bag from "../images/bag.svg";
import axios from "axios";
import Star from "../images/Star.svg";

const About = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Yangi state ma'lumotlar uchun
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xato:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Elektronika mahsulotlarini tanlash uchun ishlaydi
    const elektronikaData = data.filter((el) => el.category === "electronics");
    setFilteredData(elektronikaData);
  }, [data]);

  return (
    <>
      <div className="App">
        <div className="container">
          {isLoading ? (
            <p>Iltimos kuting bu meni aytbim emas 😁</p>
          ) : (
            <div className="cards">
              <ul
                className="cards__box"
                style={{ marginTop: "-40px", marginLeft: "-20px" }}
              >
                {filteredData.map(function (el) {
                  return (
                    <li
                      key={el.id}
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
                          <img className="cards__star" src={Star} alt="Star" />
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
          )}

          
        </div>
      </div>
    </>
  );
};

export default About;
