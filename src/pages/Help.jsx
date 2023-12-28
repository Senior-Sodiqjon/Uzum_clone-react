import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Help = () => {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}/`)
      .then((res) => {
        setData(res.data);
        setPrice(res.data.price);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="help__box">
          <div>
            <img
              className="help__box-img"
              src={data.image}
              alt="Uzumback Rasm"
            />
          </div>

          <div className="help__min-box">
            <h2 className="help__min-box-title">{data.title}</h2>

            <div className="shop__name">
              <p className="shop__name-title">Turi</p>
              <p className="shop__name-text">{data.category}</p>
            </div>

            <div className="yetkazish">
              <p className="yetkazish__name-title">Yetkazib berish</p>
              <p className="yetkasiz__name-text">1 kun bepul</p>
            </div>
            <hr />

            <div className="count__box">
              <p>Miqdor:</p>

              <div className="count__flex">
                <div className="count__min-box">
                  <button
                    className="count__button-minus"
                    onClick={() => {
                      if (count !== 1) setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <p className="count">{count}</p>
                  <button
                    className="count__button-plus"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <b className="coutn__text">Bor-yoʻgi {count} dona qoldi</b>
              </div>

              <div className="price__box">
                <p>Narx:</p>
                <div className="price__min-box">
                  <h4>{price * count} so'm</h4>
                  <del>{data.rating.rate * 1000} so'm</del>
                </div>
              </div>

              <div className="credit">
                <mark>Oyiga 1095 so'mda</mark>
                <p className="credit__text">muddatli to'lov</p>
              </div>
              <button className="shop">Xarid qilish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
