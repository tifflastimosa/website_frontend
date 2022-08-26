import './styling/App.css';
import {Link, Route, Routes, Router } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <header>
      {['sm'].map((expand) => (
              <Navbar key={expand} expand={expand} className="mb-3">
                <Container fluid>
                  <Navbar.Brand className="title" as={Link} to={"/"} variant="light">Tiffany Codes</Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className="title" id={`offcanvasNavbarLabel-expand-${expand}`} as={Link} to={"/"}>
                        Tiffany Codes
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link className="nav-links" as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to={"/projects"}>Projects</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to={"/contact"}>Contact</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to={"/"}>Resumé</Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
        ))}
      </header>

      <Routes>
        
        <Route exact path={"/"} element={<LandingPage />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/projects"} element={<Projects/>} />
        <Route exact path={"/contact"} element={<Contact />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
