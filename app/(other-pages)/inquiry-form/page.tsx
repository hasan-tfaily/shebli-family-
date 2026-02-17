"use client";

import React, { useState } from "react";
import Breadcumb from "@/components/common/Breadcumb";
import Link from "next/link";
type InquiryFormEvent = React.FormEvent<HTMLFormElement>;

export default function InquiryForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = (ok: boolean) => {
    setSuccess(ok);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleSubmit = async (e: InquiryFormEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/createFranchiseInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            fullName: entries.fullName,
            country: entries.country,
            telephone1: entries.telephone1,
            telephone2: entries.telephone2 || null,
            fax: entries.fax || null,
            email: entries.email,
            companyName: entries.companyName,
            industry: entries.industry,
            address: entries.address,
            interestCountry: entries.interestCountry,
            interestState: entries.interestState,
            investment: entries.investment || null,
            franchiseTimeline: entries.franchiseTimeline || null,
            havePremises: entries.havePremises || null,
            haveExperience: entries.haveExperience || null,
            discoverSource: entries.discoverSource || null,
            remarks: entries.remarks,
          },
        }),
      });

      if (response.ok) {
        form.reset();
        handleShowMessage(true);
      } else {
        const errorData = await response.json();
        console.error("Franchise inquiry submission failed:", errorData);
        handleShowMessage(false);
      }
    } catch (error) {
      console.error("Error submitting franchise inquiry:", error);
      handleShowMessage(false);
    }
  };

  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link href={`/`} className="caption-1 home">
                Contact
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect id="clip0_9360_28061" width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">Franchise Form</span>

            </div>   
                     <h2 className="title-page-title">Franchise Form</h2>
          </div>
        </div>
      </div>



      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <form
              id="inquiryForm"
              className="form-contact-us"
              onSubmit={handleSubmit}
            // style={{ marginTop: "40px" }}
            >
              {/* Title */}
              {/* <h3 style={{ marginBottom: "24px" }}>Franchise Form</h3> */}

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
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Ivory Coast">Ivory Coast</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Korea">North Korea</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
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
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Ivory Coast">Ivory Coast</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Korea">North Korea</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
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
                      value="Within 3 Months"
                      defaultChecked
                    />
                    <label htmlFor="franchise-3months">Within 3 Months</label>
                  </li>
                  <li>
                    <input
                      id="franchise-6months"
                      type="radio"
                      name="franchiseTimeline"
                      value="Within 6 Months"
                    />
                    <label htmlFor="franchise-6months">Within 6 Months</label>
                  </li>
                  <li>
                    <input
                      id="franchise-12months"
                      type="radio"
                      name="franchiseTimeline"
                      value="Within 12 Months"
                    />
                    <label htmlFor="franchise-12months">Within 12 Months</label>
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
                className={`tfSubscribeMsg footer-sub-element ${showMessage ? "active" : ""
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
          </div>
        </div>
      </div>


    </>
  );
}
