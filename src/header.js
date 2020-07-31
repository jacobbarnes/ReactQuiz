import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SiteIcon from './logo.jpg'

function Header(props) {
    return (
        <bs.Navbar bg="light" expand="lg">
            <bs.Navbar.Brand href="#home">Arctic</bs.Navbar.Brand>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <bs.Image src={SiteIcon} style={{height:'4rem'}} roundedCircle />
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/about' className='nav-link'>About</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, Jacob" id="basic-nav-dropdown" alignRight>
                        <bs.NavDropdown.Item href="#action/3.1">My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Item href="#action/3.3">Preferences</bs.NavDropdown.Item>
                        <bs.NavDropdown.Item href="#action/3.2">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default Header
  