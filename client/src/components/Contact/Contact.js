import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContactBase from './ContactBase';
import ContactInfo from './ContactInfo';
import ContactBg from './ContactBackground';

import './Contact.scss';

function Contact() {
  // STATE
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sent, setSent] = useState(false);

  // FILLING IN THE FORM OBJECT "LIVE" (containing the data from our guest)
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // CHECKING IF THE FORM IS CORRECTLY FILLED OUT
  const validate = (value) => {
    const errors = {};

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    if (!value.firstname) {
      errors.firstname = '⚠ This field is mandatory';
    }
    if (!value.lastname) {
      errors.lastname = '⚠ This field is mandatory';
    }
    if (!value.email) {
      errors.email = '⚠ This field is mandatory';
    } else if (!regexEmail.test(value.email)) {
      errors.email = "⚠ Please check the email input, the format doesn't match !";
    }
    return errors;
  };

  // HANDLING THE FORM SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormErrors(validate(formData));
    setIsSubmit(true);

    setFormData((prevState) => {
      return {
        ...prevState,
      };
    });
  };

  // SENDING PARAMETERS
  const sendData = async (URL) => {
    setSent(true);
    try {
      await axios.post(`${process.env.REACT_APP_SERVER}/${URL}`, {
        formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // FINALLY SENDING THIS EMAIL
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendData('api/v1/portfolio/send_info_request');
      sendData('api/v1/portfolio/send_info_recap');
    }
  }, [formErrors]);

  return (
    <>
      <ContactBg />
      {/*FORMULAIRE DE BASE*/}

      <div className='page'>
        <div className='container'>
          <h1 className='title'>Contact</h1>

          {!sent ? (
            <form className='contact' onSubmit={handleSubmit}>
              <p className='contact__intro'>
                Interested in knowing more ? <br /> Want to discuss a website idea or share a
                position that I could be interested in ? <br /> Or do you just want a picture of my
                cat to prove it's the most beautiful one ? <br />{' '}
                <span className='contact__intro--bold'>
                  Drop me a message ! I’ll get back to you very soon.{' '}
                </span>{' '}
              </p>
              <ContactBase
                handleChange={handleChange}
                formData={formData}
                formErrors={formErrors}
              />

              <ContactInfo handleChange={handleChange} formData={formData} />

              {Object.keys(formErrors).length !== 0 ? (
                <p>⚠️ The form contains errors, please check your input.</p>
              ) : (
                ''
              )}

              {/*CONDITION 1 : Le formulaire n'est pas rempli, on affiche le formulaire
    
    CONDITION 2 : Le formulaire contient des erreurs, on affiche un message d'erreur + le formulaire
    
    CONDITION 3 : Le formulaire est envoyé et ne contient pas d'erreur, on affiche un message de confirmation*/}
            </form>
          ) : (
            <div className='contact'>
              <p className='text'>
                Thank you, your request has been sent to me. <br />
                You will receive an answer very soon at the email address indicated. <br />I wish
                you a nice day ! ☀️ <br />
              </p>

              <a href='#Home'>
                <button className='btn btn--full btn--large btn--back'>
                  Take me back to the top ! ⛰️
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
