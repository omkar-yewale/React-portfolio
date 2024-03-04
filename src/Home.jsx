import React from "react"
import CommonSection from "./components/CommonSection"
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const data = {
    name: "Omkar Yewale",
    image: "./images/aboutus.png",
  };

  const services = [
    {
      title: 'Services',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      icon: '⚙️',
      className: 'services',
    },
    {
      title: 'UI / UX design',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      icon: '🎨',
      className: 'ui-ux-design',
    },
    {
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      icon: '💻',
      className: 'web-development',
    },
  ];

  return (
    <>
      <CommonSection {...data} />
      <About />

      <Contact />

    </>
  );
};

export default Home
