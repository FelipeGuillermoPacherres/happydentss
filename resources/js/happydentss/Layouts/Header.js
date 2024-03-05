import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgLogo from '../../../../public/img/logo.png';

const Header = ({url}) => {

    let urlPhatname = window.location.pathname;

    let expand = 'lg';

    function logo(){
        return(
            <img src={imgLogo} className={'logoImg'}/>
        )
    }

    return(
        <Navbar key={expand} expand={expand} className="bg-body-tertiary HappyDentssNavbar m-0 p-0">
            <Container fluid className={'HappyDentssContainer'}>
                <Navbar.Brand href={'/'} className={'m-0 p-0'}>
                    {logo()}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={'m-0 p-0'}>
                            {logo()}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-5">
                            <Nav.Link href={url + '/'} className={'HappyDentssNavbarLink ' + (urlPhatname == '/' ? 'link-selected' : '')}>Inicio</Nav.Link>
                            <Nav.Link href={url + '/nosotros'} className={'HappyDentssNavbarLink ' + (urlPhatname == '/nosotros' ? 'link-selected' : '')}>Nosotros</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
};

export default Header;

const element = document.getElementById('header');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Header {...props} />, element);
}
