"use client";

import React, { useState } from "react";
import axios from "axios";
import DropdownSelect from "../common/DropdownSelect";

interface ContactFormProps {
  parentClass?: string;
  title?: string;
  btnClass?: string;
  isTitleCenter?: boolean;
}

export default function ContactForm({
  parentClass = "form-contact-us",
  title,
  btnClass = "tf-btn style-1 w-full bg-on-suface-container text-center",
  isTitleCenter = true,
}: ContactFormProps) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // Controlled dropdown states
  const [country, setCountry] = useState<string>("Country");
  const [topic, setTopic] = useState<string>("Topic");
  const [investmentRange, setInvestmentRange] =
    useState<string>("Investment Range");

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
  }

  interface ContactFormElement extends HTMLFormElement {
    elements: ContactFormElements;
  }

  type SendEmailEvent = React.FormEvent<ContactFormElement>;

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value.trim();

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
          // If later you want to send more data:
          // name: form.name.value,
          // phone: form.phone.value,
          // city: form.city.value,
          // country,
          // topic,
          // investmentRange,
          // message: form.message.value,
        }
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        // Reset dropdowns too if you want
        setCountry("Country");
        setTopic("Topic");
        setInvestmentRange("Investment Range");

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
      setCountry("Country");
      setTopic("Topic");
      setInvestmentRange("Investment Range");
    }
  };

  const formClassName = parentClass
    ? `${parentClass} form-contact-us`
    : "form-contact-us";

  return (
    <>
      {title && (
        <div className={isTitleCenter ? "text-center mb-6" : "mb-6"}>
          <h3 className="title-section">{title}</h3>
        </div>
      )}

      <form
        id="contactform"
        className={formClassName}
        onSubmit={sendEmail}
        style={{ marginTop: "100px" }}
      >
        {/* Row 1: Name + Email */}
        <div className="cols">
          <fieldset className="item">
            <input type="text" name="name" id="name" placeholder=" Name " />
          </fieldset>
          <fieldset className="item">
            <input type="email" name="email" id="email" placeholder=" Email" />
          </fieldset>
        </div>

        {/* Row 2: Phone + Country */}
        <div className="cols">
          <fieldset className="item">
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
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
              onChange={(val) => setCountry(val)}
            />
          </fieldset>
        </div>

        {/* Row 3: City + Topic */}
        <div className="cols">
          <fieldset className="item">
            <input type="text" name="city" id="city" placeholder="City" />
          </fieldset>
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Topic",
                "New Venture",
                "Management Consultation",
                "Franchise (links to KidzMondo franchise form)",
                "Other Inquiries",
              ]}
              selectedValue={topic}
              onChange={(val) => setTopic(val)}
            />
          </fieldset>
        </div>

        {/* Row 4: Investment Range */}
        <div className="cols">
          <fieldset className="item">
            <DropdownSelect
              options={[
                "Investment Range",
                "< $5 M",
                "$5 M – $10 M",
                "$10 M – $20 M",
                "$20 M +",
              ]}
              selectedValue={investmentRange}
              onChange={(val) => setInvestmentRange(val)}
            />
          </fieldset>
          <fieldset className="item">{/* spacer */}</fieldset>
        </div>

        {/* Message */}
        <fieldset>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message*"
            defaultValue={""}
          />
        </fieldset>

        {/* Status */}
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

        {/* Submit */}
        <button type="submit" className={btnClass}>
          <span>Submit Inquiry</span>
        </button>
      </form>
    </>
  );
}
