import React from "react";
import "./contacts.css";

const Contacts: React.FC = () => {
  return (
    <div id="contact" className="contacts">
      <div className="contactsTitle">Contacts</div>
      <div className="contactsForm">
        <form>
          <div className="form__left">
            <div className="formInput">
              <div className="formTitle">
                Name <span className="requiredAsterisk">*</span>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="formInput">
              <div className="formTitle">
                Email <span className="requiredAsterisk">*</span>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="formInput">
              <div className="formTitle">Subject</div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
              />
            </div>
            <div className="formInput">
              <div className="formTitle">
                Phone <span className="requiredAsterisk">*</span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="formInput">
              <div className="formTitle">
                Address <span className="requiredAsterisk">*</span>
              </div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>
          <div className="form__right">
            <div className="formText">
              <div className="formTitle">
                Message <span className="requiredAsterisk">*</span>
              </div>
              <textarea placeholder="Description" required />
            </div>
            <div className="submitButton">
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="contactsFooter">
        &copy; 2021 Property of LOL Companies LLC
      </div>
    </div>
  );
};

export default Contacts;
