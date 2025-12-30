import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Row1.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import pic from "../Assets/myremovebg.png";


const Row1 = () => {
  return (
    <div className='dis' id='#home'>
       <Container>
      <Row>
       
        <Col>
         <div class="slide-container">
        <h4 className="slide-in">Hi, I am <span style={{color:"rgb(17, 244, 240)"}}>Abirami</span></h4>
        <h3 className="slide-in delay">I am <span style={{color:"rgb(17, 244, 240)"}}>Web Developer</span></h3>
      <div className="slide-in delay"><hr style={{ height: '4px', backgroundColor: '#3acdcaff', border: 'none',width:"100px" }} /></div> 
 <p className="slide-in delay1">I am a Web Developer and UX Designer focused on building responsive, user-friendly digital experiences. With expertise in front-end development and design systems, I combine clean, efficient code with intuitive design to deliver solutions that engage and perform. My work bridges creativity and functionality, ensuring every project adds measurable value and impact.</p>
         
         <br />
         <div className="slide-in delay">
         <div className='icons'>
         <span className='git'>
          <FaGithub />
          </span>
          <span >
            <a className='git' href="https://www.linkedin.com/in/abirami-subbiah-uiux" target='blank'> <FaLinkedinIn /></a>
        
         </span>
             
             
                <a className='git' href="https://www.behance.net/abiramisubbiah" target='blank'>
                <FaBehanceSquare /></a>
         </div>
         </div>
         <div className="slide-in delay">
         <Button as="a" href="/cv.pdf" download="My_CV" style={{backgroundColor:"rgb(17, 244, 240)",border:"rgb(17, 244, 240)", width: "130px",
    height: "40px",color:"black"}}>
    
      Download CV
    </Button>
    </div>
    </div>
    </Col>
        <Col xs={6}>
       <div className="person-wrapper">
      
      {/* Ellipse ring */}
      <svg
        className="base-ring"
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="200"
          cy="60"
          rx="160"
          ry="35"
          fill="none"
          stroke="rgb(17, 244, 240)"
          strokeWidth="3"
        />
      </svg>

      {/* Person image */}
       <div className="hero-image">
          <img src={pic} alt="hero" />
        </div>
    </div>
        {/* <div class="slide-in1">
        <div className='align'>
          
        <img src={pic} alt="" />
        </div>
        </div> */}
        </Col>
      </Row>
    </Container>
    
    </div>

  )
}

export default Row1
