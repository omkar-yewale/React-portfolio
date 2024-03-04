import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const CommonSection = ({name,image}) => {

  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="common-section-data">
              <p className="common-top-data"> Hey, I’m </p>
              <h1 className="common-heading">{name}</h1>
              <p className="common-para"> A passionate Drupal enthusiast with over four years of Drupal development expertise.I've worked on several Drupal projects. Developed custom modules, and themes, and had experience with multi-site and multi-lingual applications.  </p>
              <Button className="btn contact-btn">
                <a href="./public/files/OmkarYewaleDrupalDeveloper.pdf" download>Download CV</a>
              </Button>
            </div>
            <div className="section-common-image">
              <picture>
                <img src={image} className="hero-img" alt="common" />
              </picture>
            </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .common-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 26rem;
  }

  .common-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .common-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .common-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-common-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
  
`;

export default CommonSection
