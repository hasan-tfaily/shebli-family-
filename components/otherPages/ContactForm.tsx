"use client";
import React from "react";

import axios from "axios";
import { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";

export default function ContactForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  interface ContactFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    city: HTMLInputElement;
    message: HTMLTextAreaElement;
    // country, experience, investmentRange come from DropdownSelect (no native inputs here)
  }

  interface ContactFormElement extends HTMLFormElement {
    elements: ContactFormElements;
  }

  interface SendEmailEvent extends React.FormEvent<ContactFormElement> {}

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault();
    const email = e.currentTarget.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        { email }
      );

      if ([200, 201].includes(response.status)) {
        e.currentTarget.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false);
      handleShowMessage();
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <form id="contactform" className="form-contact-us" onSubmit={sendEmail} style={{marginTop: "100px"}}>
        {/* Row 1: Name + Email */}
        <div className="cols">
          <fieldset className="item">
            <input
              type="text"
              name="name"
              required
              id="name"
              placeholder=" Name "
            />
          </fieldset>
          <fieldset className="item">
            <input
              type="email"
              name="email"
              id="mail"
              required
              placeholder=" Email*"
            />
          </fieldset>
        </div>

        {/* Row 2: Phone + Country (replaces “How can we help you?”) */}
        <div className="cols">
          <fieldset className="item">
            <input type="number" name="phone" id="phone" placeholder="Phone" />
          </fieldset>
          <fieldset className="item">
            <DropdownSelect
              // Countries
              options={[
                "Country",
                "Saudi Arabia",
                "United Arab Emirates",
                "Qatar",
                "Kuwait",
                "Bahrain",
                "Oman",
                "Lebanon",
                "Jordan",
                "Egypt",
                "Turkey",
              ]}
            />
          </fieldset>
        </div>

        {/* Row 3: City + Experience */}
        <div className="cols">
          <fieldset className="item">
            <input type="text" name="city" id="city" placeholder="City" />
          </fieldset>
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Experience",
                "0–1 years",
                "2–5 years",
                "6–10 years",
                "10+ years",
              ]}
            />
          </fieldset>
        </div>

        {/* Row 4: Investment Range */}
        <div className="cols">
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Investment Range",
                "< $100k",
                "$100k – $250k",
                "$250k – $500k",
                "$500k – $1M",
                "$1M – $5M",
                "$5M+",
              ]}
            />
          </fieldset>
          {/* optional spacer to keep 2-column rhythm */}
          <fieldset className="item">
            {/* leave empty or add another field later */}
          </fieldset>
        </div>

        {/* Message */}
        <fieldset>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message*"
            defaultValue={""}
            required
          />
        </fieldset>

        {/* Status */}
        <div
          className={`tfSubscribeMsg  footer-sub-element ${
            showMessage ? "active" : ""
          }`}
        >
          {success ? (
            <p style={{ color: "rgb(52, 168, 83)" }}>
              Form submitted successfully.
            </p>
          ) : (
            <p style={{ color: "red" }}>Something went wrong</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="tf-btn style-1 w-full bg-on-suface-container text-center"
        >
          <span>Submit Inquiry</span>
        </button>
      </form>
    </>
  );
}
