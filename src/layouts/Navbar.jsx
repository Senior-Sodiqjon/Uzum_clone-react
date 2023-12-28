import React from "react";
import Logo from "../images/logo.svg";
import Man from "../images/man.svg";
import Catalog from "../images/catalog.svg";
import Search from "../images/search.svg";
import Heart from "../images/heart.svg";
import Bag from "../images/bag.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <div className="header">
          <div className="container">
            <div className="header__box">
              <a className="link__gapes-box-liks" to="/">
                <img src={Logo} alt="logo" />
              </a>

              <div className="header__min-box">
                <a className="link__gapes-box-liks " to="/About">
                  <div className="catalog">
                    <img src={Catalog} alt="Catalog" />
                    <p className="catalog__text">Katalog</p>
                  </div>
                </a>
                <span>
                  <div className="search__box">
                    <input
                      className="search__input"
                      type="text"
                      placeholder="Mahsulotlar va tukumlarni izlash"
                    />
                    <div className="search">
                      <img className="search__img" src={Search} alt="" />
                    </div>
                  </div>
                </span>
              </div>

              <ul className="header__login">
                <li className="header__login-list ">
                  <img src={Man} alt="man" />

                  <a className="link__gapes-box-liks" to="/login">
                    <button id="myBtn" className="header__login-btn">
                      Kirish
                    </button>
                  </a>
                 
                </li>

                <li className="header__login-list-twoo heart-list">
                  <img src={Heart} alt="heart" />
                  <button className="header__login-btn heart ">
                    Saralanganlar
                  </button>
                </li>

                <li className="header__login-list-twoo bag-list">
                  <img src={Bag} alt="heart" />
                  <button className="header__login-btn bag">Savat</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="link__gapes">
          <div className="container">
            <div className="link__pages-box">
              <a className="link__gapes-box-liks" to="/About">
                Barcha maxshulotlar
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Elektronika
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Maishiy texnika
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Kiyim
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Poyabsal
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Akseesuarlar
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Go'zallik va parvarish
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Salomatlik
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Uy ro'zgor buyumlari
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Salomatlik
              </a>
              <a className="link__gapes-box-liks" to="/About">
                Uy ro'zgor buyumlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
