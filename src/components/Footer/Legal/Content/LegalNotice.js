import React from "react";

import "./Legal.scss";

function LegalNotice() {
  return (
    <>
      <div className="page">
        <h1 className="title">Mentions Légales</h1>
        <hr className="title-rule" />

        <article className="legal__notice">
          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Apsara Yoga
            </h1>{" "}
            <p className="text legal__text legal__item --border-left">
              Paris <br /> France
            </p>{" "}
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Contact
            </h1>

            <p className="text legal__text legal__item --border-left">
              apsarayoga@hotmail.com
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Société
            </h1>
            <p className="text legal__text legal__item --border-left">
              13 rue du beau chemin <br />
              16000 Bernay-Saint-Martin <br />
              <br />
              SAS Apsara Yoga <br />
              <br />
              SIREN XXXXXXX
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Directrice de publication
            </h1>
            <p className="text legal__text legal__item --border-left">
              Léa Baty | leabaty.dev@gmail.com
            </p>
          </section>

          <section className="legal__section">
            <h1 className="title title--nano legal__title legal__item">
              Hébergement du site
            </h1>
            <p className="text legal__text legal__item --border-left">
              XXX | Design by <a target="_blank">Léa Baty</a>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default LegalNotice;
