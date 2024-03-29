import React from "react"
import styled from "styled-components";
import { FaMapLocationDot, FaMobileRetro, FaRegMessage  } from "react-icons/fa6";
import { Button } from "./styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    section {
      position: relative;
      z-index: 3;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    
    .container {
      max-width: 1080px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
    }
    
    .section-header {
      margin-bottom: 50px;
      text-align: center;
    }
    
    .section-header h2 {
      color: black;
      font-weight: bold;
      font-size: 3em;
      margin-bottom: 20px;
    }

    .social-icons {
      display: flex;
    
      div {
        padding: 2rem;
      }
    
      .icons {
        color: ${({ theme }) => theme.colors.black};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
        align-items: center;
      }

      .contact-btn::after {
        position: absolute;
        content: "Send";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: rgb(98 84 243);
        transition: all .35s;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding: 9rem 1.5rem 5rem 1.5rem;
    }

  `;
  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42665.40969182896!2d73.03846452929251!3d19.058238143160025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a53e30b83%3A0xa766b29f687709d7!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709184424165!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <section>
          <div className="section-header">
            <div className="container">
              <h2>GET IN TOUCH</h2>
              <p> Feel Free to contact me any time. I will get back to you as soon as. </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="contact-info">
                <div className="social-icons">
                  <div className="icons">
                    <FaMapLocationDot />
                  </div>

                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>Kharghar, Sector - 12<br /> Navi Mumbai, India, <br />410210</p>
                  </div>
                </div>

                <div className="social-icons">
                  <div className="icons">
                    <FaMobileRetro />
                  </div>

                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>+91 9967177564 / +91 7021383572</p>
                  </div>
                </div>

                <div className="social-icons">
                  <div className="icons">
                    <FaRegMessage />
                  </div>

                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>yewaleomkar@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form action="https://formspree.io/f/mgegyplv" method="POST">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input type="text" name="name" autoComplete="off" required/>
                    <span>Name</span>
                  </div>

                  <div className="input-box">
                    <input type="email" name="Email" autoComplete="off" required/>
                    <span>Email</span>
                  </div>

                  <div className="input-box">
                    <textarea name="message" cols= "30" rows="6" autoComplete="off" required></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div>
                    <Button className="btn contact-btn" type="submit">
                      <a>Send</a>
                    </Button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          </section>
      </Wrapper>
    </>
  );
};

export default Contact
