import React from "react"
import CommonSection from "./components/CommonSection"

const About = () => {
  const data = {
    name: "omee",
    image: "./images/projectabout.png",
  };
  return (
    <>
      <CommonSection {...data} />
    </>
  );
};

export default About
