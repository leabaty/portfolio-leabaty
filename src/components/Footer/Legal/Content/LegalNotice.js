import React from "react";

import "./Legal.scss";
import Navbar from "../../../Navbar/Navbar"

function LegalNotice() {
  return (
    <>
    <Navbar/>
      <div className="page legal__page">
        <h1 className="title">Mentions Légales</h1>

        <article className="legal__notice">
          {/* <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Name
            </h1>{" "}
            <p className="text legal__text legal__item --border-left">
              Evolutio, owner Léa Baty
            </p>{" "}
          </section> */}

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Contact
            </h1>

            <p className="text legal__text legal__item --border-left">
              leabaty.dev@gmail.com
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Company
            </h1>
            <p className="text legal__text legal__item --border-left">
              75020 Paris <br />
              <br />
              SIREN XXXXXXX
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Design & Development
            </h1>
            <p className="text legal__text legal__item --border-left">
              Léa Baty
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Web host
            </h1>
            <p className="text legal__text legal__item --border-left">
              Netflify 
            </p>
          </section>


        </article>
      </div>
    </>
  );
}

export default LegalNotice;
