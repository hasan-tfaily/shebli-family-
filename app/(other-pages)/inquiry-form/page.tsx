"use client";

import React, { useState } from "react";
import Breadcumb from "@/components/common/Breadcumb";
type InquiryFormEvent = React.FormEvent<HTMLFormElement>;

export default function InquiryForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = (ok: boolean) => {
    setSuccess(ok);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleSubmit = (e: InquiryFormEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log("Inquiry form submitted:", Object.fromEntries(formData.entries()));

    form.reset();
    handleShowMessage(true);
  };

  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">Inquiry Form</h2>
          </div>
        </div>
      </div>

      <form
        id="inquiryForm"
        className="form-contact-us"
        onSubmit={handleSubmit}
        style={{ marginTop: "40px" }}
      >
        {/* Title */}
        <h3 style={{ marginBottom: "24px" }}>Inquiry Form</h3>

        {/* Row 1: Full name + Country */}
        <div className="cols">
          <fieldset className="item inputEntity">
            <label htmlFor="fullName">Title and full name*</label>
            <div className="inputParent">
              <span className="errormsg" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mandatory"
                required
              />
            </div>
          </fieldset>

          {/* 👇 UPDATED: use inputParent + form-control so it looks like text fields */}
          <fieldset className="item inputEntity">
            <label htmlFor="country">Country*</label>
            <div className="inputParent">
              <span className="errormsg" />
              <select
                id="country"
                name="country"
                className="mandatory form-control list"
                required
              >
                <option value="">Country*</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Qatar">Qatar</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Oman">Oman</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Jordan">Jordan</option>
                <option value="Egypt">Egypt</option>
                <option value="Turkey">Turkey</option>
                {/* ...rest of the countries */}
              </select>
            </div>
          </fieldset>
        </div>

        {/* Row 2: Telephone 1 + Telephone 2 */}
        <div className="cols">
          <fieldset className="item inputEntity">
            <label htmlFor="telephone1">Telephone 1*</label>
            <div className="inputParent">
              <span className="errormsg" />
              <input
                type="text"
                id="telephone1"
                name="telephone1"
                className="mandatory form-control phone"
                required
              />
            </div>
          </fieldset>

          <fieldset className="item inputEntity">
            <label htmlFor="telephone2">Telephone 2</label>
            <div className="inputParent">
              <input
                type="text"
                id="telephone2"
                name="telephone2"
                className="form-control phone"
              />
            </div>
          </fieldset>
        </div>

        {/* Row 3: Fax + Email */}
        <div className="cols">
          <fieldset className="item inputEntity">
            <label htmlFor="fax">Fax</label>
            <div className="inputParent">
              <span className="errormsg" />
              <input type="text" id="fax" name="fax" className="form-control" />
            </div>
          </fieldset>

          <fieldset className="item inputEntity">
            <label htmlFor="email">e-mail address*</label>
            <div className="inputParent">
              <span className="errormsg" />
              <input
                type="email"
                id="email"
                name="email"
                className="mandatory email form-control phone"
                required
              />
            </div>
          </fieldset>
        </div>

        {/* Company Name */}
        <fieldset className="item inputEntity">
          <label htmlFor="companyName">Company Name*</label>
          <div className="textareaParent">
            <span className="errormsg" />
            <textarea
              id="companyName"
              name="companyName"
              className="mandatory form-control"
              rows={2}
              required
            />
          </div>
        </fieldset>

        {/* Industry */}
        <fieldset className="item inputEntity">
          <label htmlFor="industry">Industry*</label>
          <div className="textareaParent">
            <span className="errormsg" />
            <textarea
              id="industry"
              name="industry"
              className="mandatory form-control"
              rows={2}
              required
            />
          </div>
        </fieldset>

        {/* Address */}
        <fieldset className="item inputEntity">
          <label htmlFor="address">Address*</label>
          <div className="textareaParent">
            <span className="errormsg" />
            <textarea
              id="address"
              name="address"
              className="mandatory form-control"
              rows={2}
              required
            />
          </div>
        </fieldset>

        {/* Row: Territory of interest country + state */}
        <div className="cols">
          {/* 👇 UPDATED: same idea for interestCountry */}
          <fieldset className="item inputEntity">
            <label htmlFor="interestCountry">Territory of Interest*</label>
            <div className="inputParent">
              <span className="errormsg" />
              <select
                id="interestCountry"
                name="interestCountry"
                className="mandatory form-control list"
                required
              >
                <option value="">Country*</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Qatar">Qatar</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Oman">Oman</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Jordan">Jordan</option>
                <option value="Egypt">Egypt</option>
                <option value="Turkey">Turkey</option>
                {/* ...rest */}
              </select>
            </div>
          </fieldset>

          <fieldset className="item inputEntity">
            <label htmlFor="interestState">Province/State/City*</label>
            <div className="inputParent">
              <input
                type="text"
                id="interestState"
                name="interestState"
                className="mandatory form-control"
                required
              />
            </div>
          </fieldset>
        </div>

        {/* Available Investment */}
        <fieldset className="item inputEntity choiceArea">
          <label>Available Investment</label>
          <ul className="stackedInput">
            <li>
              <input
                id="investment-5000"
                type="radio"
                name="investment"
                value="US 5,000,001 - US 10,000,000"
                defaultChecked
              />
              <label htmlFor="investment-5000">
                US 5,000,001 - US 10,000,000
              </label>
            </li>
            <li>
              <input
                id="investment-10000"
                type="radio"
                name="investment"
                value="US 10,000,001 - US 20,000,000"
              />
              <label htmlFor="investment-10000">
                US 10,000,001 - US 20,000,000
              </label>
            </li>
            <li>
              <input
                id="investment-20000"
                type="radio"
                name="investment"
                value="Above US 20,000,000"
              />
              <label htmlFor="investment-20000">Above US 20,000,000</label>
            </li>
          </ul>
        </fieldset>

        {/* Franchise timeline */}
        <fieldset className="item inputEntity choiceArea">
          <label>How soon are you planning to get a franchise?</label>
          <ul className="stackedInput">
            <li>
              <input
                id="franchise-3months"
                type="radio"
                name="franchiseTimeline"
                value="3 Months"
                defaultChecked
              />
              <label htmlFor="franchise-3months">3 Months</label>
            </li>
            <li>
              <input
                id="franchise-6months"
                type="radio"
                name="franchiseTimeline"
                value="6 Months"
              />
              <label htmlFor="franchise-6months">6 Months</label>
            </li>
            <li>
              <input
                id="franchise-12months"
                type="radio"
                name="franchiseTimeline"
                value="12 Months"
              />
              <label htmlFor="franchise-12months">12 Months</label>
            </li>
          </ul>
        </fieldset>

        {/* Premises? */}
        <fieldset className="item inputEntity choiceArea">
          <label>
            Do you already have premises (a suitable site) to start the
            business?
          </label>
          <ul className="stackedInput">
            <li>
              <input
                id="premises-no"
                type="radio"
                name="havePremises"
                value="No"
                defaultChecked
              />
              <label htmlFor="premises-no">No</label>
            </li>
            <li>
              <input
                id="premises-yes"
                type="radio"
                name="havePremises"
                value="Yes"
              />
              <label htmlFor="premises-yes">Yes</label>
            </li>
          </ul>
        </fieldset>

        {/* Experience? */}
        <fieldset className="item inputEntity choiceArea">
          <label>
            Do you have prior experience in family entertainment center,
            childcare or education related business?
          </label>
          <ul className="stackedInput">
            <li>
              <input
                id="experience-no"
                type="radio"
                name="haveExperience"
                value="No"
                defaultChecked
              />
              <label htmlFor="experience-no">No</label>
            </li>
            <li>
              <input
                id="experience-yes"
                type="radio"
                name="haveExperience"
                value="Yes"
              />
              <label htmlFor="experience-yes">Yes</label>
            </li>
          </ul>
        </fieldset>

        {/* How did you know us? */}
        <fieldset className="item inputEntity choiceArea">
          <label>How did you get to know about us?</label>
          <ul className="stackedInput">
            <li>
              <input
                id="source-email"
                type="radio"
                name="discoverSource"
                value="Email or Direct Marketing"
                defaultChecked
              />
              <label htmlFor="source-email">Email or Direct Marketing</label>
            </li>
            <li>
              <input
                id="source-ad"
                type="radio"
                name="discoverSource"
                value="Advertisement"
              />
              <label htmlFor="source-ad">Advertisement</label>
            </li>
            <li>
              <input
                id="source-website"
                type="radio"
                name="discoverSource"
                value="Website"
              />
              <label htmlFor="source-website">Website</label>
            </li>
            <li>
              <input
                id="source-others"
                type="radio"
                name="discoverSource"
                value="Others"
              />
              <label htmlFor="source-others">Others</label>
            </li>
          </ul>
        </fieldset>

        {/* Remarks */}
        <fieldset className="item inputEntity">
          <label htmlFor="remarks">Remarks*</label>
          <div className="textareaParent">
            <span className="errormsg" />
            <textarea
              id="remarks"
              name="remarks"
              className="form-control mandatory"
              rows={2}
              required
            />
          </div>
        </fieldset>
        
      {/* Required note */}
      <div className="requiredFields" style={{ marginTop: "12px" }}>
        * Mandatory Fields
      </div>

      {/* Status message */}
      <div
        className={`tfSubscribeMsg footer-sub-element ${
          showMessage ? "active" : ""
        }`}
        style={{ marginTop: "12px", marginBottom: "12px" }}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)", margin: 0 }}>
            Form submitted successfully.
          </p>
        ) : (
          <p style={{ color: "red", margin: 0 }}>Something went wrong</p>
        )}
      </div>

      {/* Submit button – bottom right */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // ⬅️ pushes button to the right
          marginTop: "8px",
        }}
      >
        <button
          type="submit"
          className="tf-btn style-1 bg-on-suface-container text-center"
          style={{
            width: "auto",        // ⬅️ no full width
            padding: "8px 20px",  // smaller
            fontSize: "14px",
            minWidth: "150px",
            whiteSpace: "nowrap",
          }}
        >
          <span>Submit Inquiry</span>
        </button>
      </div>

      </form>
    </>
  );
}
