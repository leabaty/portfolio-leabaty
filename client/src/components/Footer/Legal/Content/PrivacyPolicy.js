import React from "react";

import "./Legal.scss";
import Navbar from "../../../Navbar/Navbar";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="page legal__page">
        <h1 className="title">Privacy Policy</h1>

        <article className="legal__article">
          <p className="text">
            This page is used to inform website visitors regarding these policies
            with the collection, use, and disclosure of Personal Information that may occur when using this website.
          </p>

          <p className="text">
            {" "}
            If you choose to use this service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that I collect are used for providing and improving the
            Service. I will not use or share your information with anyone
            except as described in this Privacy Policy.{" "}
          </p>
        </article>

        <article className="legal__article">
          <h2 className="title title--nano">Information Collection and Use</h2>

          <p className="text">
            For a better experience while using this Service, I may require you
            to provide me with certain personally identifiable information,
            including your name, email address and phone number in the case of
            using the contact form. The information that I collect will be used
            to contact or identify you.
          </p>
        </article>

        <article className="legal__article">
          <h1 className="title title--nano">Cookies</h1>

          <p className="text">This website doesn’t use cookies.</p>
        </article>

        <article className="legal__article">
          <h1 className="title title--nano">Security</h1>

          <p className="text">
            I value your trust in providing us your Personal Information, thus
            I are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </p>
        </article>

        <article className="legal__article">
          <h1 className="title title--nano">Changes to This Privacy Policy</h1>

          <p className="text">
            I may update this Privacy Policy from time to time. Thus, I advise
            you to review this page periodically for any changes. 
          </p>
        </article>

        <article className="legal__article">
          <h1 className="title title--nano">Contact me</h1>

          <p className="text">
            If you have any questions or suggestions about this Privacy Policy,
            do not hesitate to contact me through the contact form.
          </p>
        </article>
      </div>
    </>
  );
}

export default PrivacyPolicy;
