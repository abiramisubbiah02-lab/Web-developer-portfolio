import React from "react";
import { FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import "./Card1.css";

const Card1 = () => {
  return (
    <section className="whatido-section" id="Serving">
      <h5 style={{color:"white"}}>My Services</h5>
      <h2 className="section-title">What I do</h2>

      <div className="whatido-cards">
        {/* Card 1 */}
        <div className="whatido-card">
          <div className="icon-box">
            <FaLaptopCode />
          </div>
          <h3>Frontend Developer</h3>
          <span className="line"></span>
          <p>
            I build responsive, high-performance websites using HTML, CSS,
            JavaScript, and React. My focus is clean code, accessibility,
            and smooth user interactions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="whatido-card">
          <div className="icon-box">
            <FaPencilRuler />
          </div>
          <h3>UX-UI Designer</h3>
          <span className="line"></span>
          <p>
            I craft intuitive interfaces and engaging user journeys.
            From wireframes to prototypes, I blend aesthetics with
            usability for meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card1;
