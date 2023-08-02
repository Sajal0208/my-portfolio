import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layout";
import styled from "styled-components";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const [input, setInput] = useState({
    fName: "",
    emailyo: "",
    contact: "",
    subject: "",
    message: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: input.fName,
      email: input.emailyo,
      contact: input.contact,
      subject: input.subject,
      message: input.message,
    };
    const sendingData = JSON.stringify(data);
    axios
      .post(
        "https://portfolio-website-560f4-default-rtdb.firebaseio.com/contact.json",
        {
          sendingData,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setInput({
      fName: "",
      emailyo: "",
      contact: "",
      subject: "",
      message: "",
    });
  };

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          emailyo: preValue.emailyo,
          contact: preValue.contact,
          subject: preValue.subject,
          message: preValue.message,
        };
      } else if (name === "emailyo") {
        return {
          fName: preValue.fName,
          emailyo: value,
          contact: preValue.contact,
          subject: preValue.subject,
          message: preValue.message,
        };
      } else if (name === "contact") {
        return {
          fName: preValue.fName,
          emailyo: preValue.emailyo,
          contact: value,
          subject: preValue.subject,
          message: preValue.message,
        };
      } else if (name === "subject") {
        return {
          fName: preValue.fName,
          emailyo: preValue.emailyo,
          contact: preValue.contact,
          subject: value,
          message: preValue.message,
        };
      } else if (name === "message") {
        return {
          fName: preValue.fName,
          emailyo: preValue.emailyo,
          contact: preValue.contact,
          subject: preValue.subject,
          message: value,
        };
      }
    });
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={formSubmitHandler}>
              <div className="form-field">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="name"
                  required
                  name="fName"
                  placeholder="Name"
                  onChange={inputEvent}
                  value={input.fName}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="email"
                  name="emailyo"
                  required
                  placeholder="Email"
                  onChange={inputEvent}
                  value={input.emailyo}
                />
              </div>
              <div className="form-field form-contact">
                <label htmlFor="phone">Enter Your Contact Number</label>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder="Phone"
                  id="phone"
                  required
                  name="contact"
                  minLength="10"
                  maxLength="10"
                  onChange={inputEvent}
                  value={input.contact}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject" id={"subject"}>
                  Enter Your Subject
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  onChange={inputEvent}
                  value={input.subject}
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter Your Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  placeholder="Message..."
                  name="message"
                  rows="10"
                  onChange={inputEvent}
                  required
                  value={input.message}
                ></textarea>
              </div>
              <div className="form-field f-button">
                <button className={"submit-button"} type="submit">
                  <PrimaryButton
                    className={"form-button"}
                    title={"Send Email"}
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+91-9109518550"}
              cont2={""}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"sajaldewangan@gmail.com"}
              cont2={"sajaldewangan0@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location} 
              cont2={"India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
        .submit-button {
          outline: none;
          border: none;
        }
      }
      .form-contact {
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;
export default ContactPage;
