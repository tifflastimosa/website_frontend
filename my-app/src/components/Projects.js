import { Card, Carousel } from "react-bootstrap";
import '../styling/Projects.css';


const Projects = () => {

    return (
        <div>
          <h1>Projects</h1>

          <h2>Travel Hub</h2>
          <div className="wrapper">
            <div className="block">
           
              <Carousel variant="dark" className="carousel">
                <Carousel.Item>
                  <img
                  id="image"
                  className="d-block w-100"
                  src="../images/travel_hub/1LandingPage.png"
                  alt="First slide"
                  />
              {/* <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    id="image"
                    className="d-block w-100"
                    src="../images/travel_hub/2Create-Trips-Page.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
        
                <Carousel.Item>
                  <img
                    id="image"
                    className="d-block w-100"
                    src="../images/travel_hub/3Trips-Page.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div>

              <div className="block"> 
                <p> A website</p>
              </div>
            </div>

            <h2>PetTin</h2>
            <h2>Travel Hub</h2>
            <h2>Movie Time</h2>
            <h2>Let's Book It API</h2>
            <h2>Quantified Self</h2>

        </div>
    )

}

export default Projects;