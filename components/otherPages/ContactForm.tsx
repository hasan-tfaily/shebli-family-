"use client";

import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
// ---- TYPES ----
interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  city: HTMLInputElement;
  message: HTMLTextAreaElement;
}

type ContactFormElement = HTMLFormElement & {
  elements: ContactFormElements;
};

type SendEmailEvent = React.FormEvent<ContactFormElement>;

export default function ContactForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // dropdowns (required)
  const [country, setCountry] = useState("");
  const [topic, setTopic] = useState("");

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault();

    // ✅ capture the form once, before any await
    const form = e.currentTarget;
    const { name, email, phone, city, message } = form.elements;

    // 🔹 name required
    if (!name.value.trim()) {
      alert("Please enter your name.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    // 🔹 phone OR email required
    if (!email.value.trim() && !phone.value.trim()) {
      alert("Please provide at least a phone number or an email address.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    // 🔹 country required
    if (!country || country === "Country") {
      alert("Please select your country.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    // 🔹 city required
    if (!city.value.trim()) {
      alert("Please enter your city.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    // 🔹 topic required
    if (!topic || topic === "Topic") {
      alert("Please select a topic.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    // 🔹 message required
    if (!message.value.trim()) {
      alert("Please enter your message.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    try {
      const response = await fetch("/api/createLeads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: name.value.trim(),
            email: email.value.trim() || null,
            phoneNumber: phone.value.trim() || null,
            country: country,
            city: city.value.trim(),
            topic: topic,
            message: message.value.trim(),
          },
        }),
      });

      if (response.ok) {
        // ✅ safely reset using the captured form reference
        form.reset();
        setCountry("");
        setTopic("");
        setSuccess(true);
        handleShowMessage();
      } else {
        const errorData = await response.json();
        console.error("Lead creation failed:", errorData);
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
      handleShowMessage();
    }
  };

  return (
    <>
      <form
        id="contactform"
        className="form-contact-us"
        onSubmit={sendEmail}
        style={{ marginTop: "100px" }}
      >
        {/* Row 1: Name + Email */}
        <div className="cols">
          <fieldset className="item">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" Name "
              required
            />
          </fieldset>
          <fieldset className="item">
            <input
              type="email"
              name="email"
              id="mail"
              placeholder=" Email"
              // not required alone (we validate phone OR email)
            />
          </fieldset>
        </div>

        {/* Row 2: Phone + Country */}
        <div className="cols">
          <fieldset className="item">
            <input type="number" name="phone" id="phone" placeholder="Phone" />
          </fieldset>
          <fieldset className="item">
            <DropdownSelect
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
              selectedValue={country}
              onChange={setCountry}
            />
          </fieldset>
        </div>

        {/* Row 3: City + Topic */}
        <div className="cols">
          <fieldset className="item">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              required
            />
          </fieldset>
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Topic",
                "New Venture",
                "Management Consultation",
                "Other Inquiries",
              ]}
              selectedValue={topic}
              onChange={setTopic}
            />
          </fieldset>
        </div>

        {/* Row 4: Investment Range */}
        {/* <div className="cols">
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Investment Range",
                "< $5 M",
                "$5 M – $10 M",
                "$10 M – $20 M",
                "$20 M +",
              ]}
            />
          </fieldset>
          <fieldset className="item"></fieldset>
        </div> */}

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
