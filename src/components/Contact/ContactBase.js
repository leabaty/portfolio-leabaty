import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";

import "./Contact.scss";

function ContactBase({ handleChange, formData, formErrors }) {
  return (
    <>
      <div className="form__base">
        <div className="form__element">
          <div className="form__item">
            <AiOutlineUser />
            <input
              className="form__input --base"
              placeholder="Firstname"
              type="text"
              name="firstname"
              onChange={handleChange}
              value={formData.firstname}
            />
            <p className="form__warning">{formErrors.firstname}</p>
          </div>
        </div>

        <div className="form__element">
          <div className="form__item">
            <AiOutlineUser />
            <input
              className="form__input --base"
              placeholder="Lastname"
              type="text"
              name="lastname"
              onChange={handleChange}
              value={formData.lastname}
            />
            <p className="form__warning">{formErrors.lastname}</p>
          </div>
        </div>

        <div className="form__element">
          <div className="form__item ">
            <FiPhone />
            <input
              className="form__input --base"
              placeholder="Phone number"
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
            <p className="form__warning">{formErrors.phone}</p>
          </div>
        </div>

        <div className="form__element">
          <div className="form__item">
            <FiMail />
            <input
              className="form__input --base"
              placeholder="Email address"
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <p className="form__warning">{formErrors.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBase;
