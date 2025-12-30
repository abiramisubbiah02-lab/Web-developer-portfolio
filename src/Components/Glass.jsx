import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import "./Glass.css";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
];

const Glass = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">
        Technologies I use to build clean and scalable interfaces.
      </p>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div className="glass-card" key={index}>
            <div
              className="icon-wrapper"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Glass;
