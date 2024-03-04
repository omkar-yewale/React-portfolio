import React from "react"
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaDrupal, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
const Wrapper = styled.footer`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    h2 {
      color: ${({ theme }) => theme.colors.heading};
      font-size: 2rem;
      font-weight: 300;
      white-space: normal;
      text-align: center;
    }
  }

  .contact-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h2>Get In Touch</h2>
              <h2>Feel Free To Contact Me</h2>
            </div>
          <div>
          <Button className="btn contact-btn">
            <NavLink to="/contact"> Let's Talk </NavLink>
          </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          {/* 1st column */}
          <div className="footer-about">
            <h3>About</h3>
            <p> Lorem ipsum et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. </p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>About 2</h3>
            <p> Lorem ipsum et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. </p>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow me</h3>
            <div className="social-icons">
              <div>
                <a href="https://www.linkedin.com/in/omkar-yewale-77a88ba2/" alt="linkdin" target="_blank">
                  <FaLinkedin className="icons"/>
                </a>
              </div>
              <div>
                <a href="https://www.drupal.org/u/omkar_yewale" alt="drupal" target="_blank">
                  <FaDrupal className="icons"/>
                </a>
              </div>
              <div>
                <a href="https://github.com/omkar-yewale" alt="github" target="_blank">
                  <FaGithub className="icons"/>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/omkar_yewale/" alt="instagram" target="_blank">
                  <FaInstagram className="icons"/>
                </a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
          <div className="footer-social">
            <h3>Contact</h3>
            <div className="social-icons">
              <div>
                <a href="https://wa.link/y34hl5" alt="whatsapp" target="_blank">
                  <FaWhatsapp className="icons"/>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </footer>
      </Wrapper>
    </>
  );
};

export default Footer
