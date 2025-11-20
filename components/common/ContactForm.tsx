"use client";

import React, { useState } from "react";
import axios from "axios";
import DropdownSelect from "./DropdownSelect";

interface ContactFormProps {
  parentClass?: string;
  btnClass?: string;
  isTitleCenter?: boolean;
  title?: string;
}

export default function ContactForm({
  parentClass = "form-contact-home style-border",
  btnClass = "tf-btn style-2 bg-on-suface-container w-full text-center",
  isTitleCenter = true,
  title = "Get A Free Quote",
}: ContactFormProps) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim() || "";

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        { email }
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false);
      handleShowMessage();
      form.reset();
    }
  };

  return (
    <form onSubmit={sendEmail} className={parentClass}>
      <h5
        className={`title-form ${isTitleCenter ? "text-center" : ""}`}
      >
        {title}
      </h5>

      <fieldset>
        <input required type="text" placeholder="Full name" name="name" />
      </fieldset>

      <fieldset>
        <input
          required
          type="number"
          placeholder="Phone number"
          name="phone"
        />
      </fieldset>

      <fieldset>
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
        />
      </fieldset>

      <fieldset>
        <DropdownSelect
          options={[
            "How can we help you?",
            "Option 1",
            "Option 2",
            "Option 3",
          ]}
        />
      </fieldset>

      <fieldset>
        <textarea
          required
          name="message"
          placeholder="Your message"
          defaultValue=""
        />
      </fieldset>

      <div
        className={`tfSubscribeMsg footer-sub-element ${
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

      <button type="submit" className={btnClass}>
        <span>Submit Request</span>
      </button>
    </form>
  );
}
