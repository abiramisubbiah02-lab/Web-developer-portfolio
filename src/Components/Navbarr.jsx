import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navbarr.css'


const Navbarr = () => {
  return (
    
    <div  className='bgcolor'>
         <div className='fontstyle'>
          <Navbar expand="lg" fixed='top'>


         
         <Container>
          <Navbar.Brand  style={{color:"rgb(17, 244, 240)",fontSize:"30px",fontWeight:"bold"}} >Portfolio</Navbar.Brand>
          <Nav>
            
            <Nav.Link className="navitem" ><b>Home</b></Nav.Link>
            
             
<Nav.Link className="navitem" href="#Skills"><b>Skills</b></Nav.Link>
          
            <Nav.Link className="navitem" href="#Serving"><b>Service</b></Nav.Link>
          
            <Nav.Link className="navitem" href="#pricing"><b>Projects</b></Nav.Link>

            <div className='box' >
            <Nav.Link href="#Con">Contact Me</Nav.Link>
            </div>
          </Nav>
          
          
          </Container>
        
      </Navbar>
      
       </div>
      </div>
      )
}

export default Navbarr;

