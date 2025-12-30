import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navbarr.css'


const Navbarr = () => {
  return (
    
    <div  className='bgcolor'>
         <div className='fontstyle'>
          <Navbar>
         
         <Container>
          <Navbar.Brand  style={{color:"rgb(17, 244, 240)",fontSize:"30px",fontWeight:"bold"}} >Portfolio</Navbar.Brand>
          <Nav >
            {/* #3acdcaff */}
            <Nav.Link className="navitem" href="#home" style={{paddingRight:"80px",color:"white",fontSize:"18px"}}><b>Home</b></Nav.Link>
            {/* <Nav.Link href="#features" style={{color:"black",paddingRight:"80px"}}>About Me</Nav.Link> */}
            <Nav.Link className="navitem" href="#skills"  style={{paddingRight:"80px",color:"white",fontSize:"18px"}}><b>Skills</b></Nav.Link>
            <Nav.Link className="navitem" href="#serving"  style={{paddingRight:"80px",color:"white",fontSize:"18px"}}><b>Service</b></Nav.Link>
            <Nav.Link className="navitem" href="#pricing" style={{paddingRight:"190px",color:"white",fontSize:"18px"}}><b>Projects</b></Nav.Link>

            <div className='box' >
            <Nav.Link href="#Con" style={{color:"black"}}>Contact Me</Nav.Link>
            </div>
          </Nav>
          
          </Container>
        
      </Navbar>
      
       </div>
      </div>
     
)
}

export default Navbarr

