import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import "./NotFound.scss";

import NotFoundImg from "../../assets/images/notfound-illustration.svg";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="page notfound__page">
        <section>
          <h1 className="notfound__title title"> 404 </h1>
          <p className="notfound__text"> Whoops, this page seems to be missing...</p>
          <img
            className="notfound__img"
            src={NotFoundImg}
            alt="404 - Not Found"
          />
        </section>

        <Link to="/#Home">
          <button className="btn btn--medium btn--back">
            Take me back to the homepage !
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
