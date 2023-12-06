import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import './header.css'
function Header(){
    return(
        <>
        
          <Navbar expand="lg" className="bg-dark">
      <Container>
        
        <Navbar.Brand className="" >
        <Link to='/'>
              
              <img style={{height:'40px'}}  src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Alt_Rectangle_White._CB443385945_.png" alt="" />
          
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle className="bg-white"  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto  col-5 justify-content-end justify-content-around">
           
             
            <Link className='text-decoration-none ' to='/md/:pop'>
                <span className="text-white fs-5">

                Popular
                </span>
               
            
            </Link>
            <Link className='text-decoration-none ' to='/mt/:id'>
                <span className="text-white fs-5">

                Top Rated
                </span>
            
            </Link>
            <Link className='text-decoration-none ' to='/mu/:id'>
                <span className="text-white fs-5 ">

                Upcoming
                </span>
            
            </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header