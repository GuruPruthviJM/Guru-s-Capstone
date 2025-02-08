import React from "react";
import "../../CSS/customer_module/About.css";

const sections = [
  {
    title: "Our Vision",
    text: "To create a better world through innovation, collaboration, and sustainability.",
  },
  {
    title: "Our Mission",
    text: "Deliver excellence and value to our clients with integrity and transparency.",
  },
  {
    title: "Our Values",
    text: "Innovation, trust, and a commitment to customer success.",
  },
];

const AboutUs = () => {
  return (
    <div >
      <div className="container my-5">
        <div className="about-section">
          <div className="about-text">
            <h3 className="aboutUs-text">About Us</h3>
            <h5 className="py-3">Who We Are</h5>
            <p>
              We are a passionate team dedicated to providing innovative solutions for our clients.
              With years of experience and expertise in various industries, we strive to deliver
              exceptional results that exceed expectations.
            </p>
            <p>
              Our mission is to empower businesses by leveraging cutting-edge technologies
              and fostering meaningful relationships.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://th.bing.com/th/id/OIP.9Zos_lyHe6HIw0FMMp8RHAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Team Photo"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="about-card-container">
          {sections.map((section, index) => (
            <div key={index} className="about-card">
              <h5 className="about-card-title">{section.title}</h5>
              <p className="about-card-text">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
