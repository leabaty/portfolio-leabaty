import React from "react";

import "./Contact.scss";

function ContactInfo({ handleChange, formData }) {
  return (
    <>
      <div className="form__information">
        <div className="form__element">
          <textarea
            className="form__input --text"
            placeholder="What's up ?"
            type="text"
            name="information_request"
            onChange={handleChange}
            value={formData.information_request}
          />
        </div>

        <button className="btn btn--full btn--large btn--darkred-sm">
          Send !
        </button>
      </div>
    </>
  );
}

export default ContactInfo;
