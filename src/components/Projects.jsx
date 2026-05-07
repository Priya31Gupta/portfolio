import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'

import tcd from '../media/weather-app.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import cafeSerendipity from "../media/readme-home.png";
import cinestream from "../media/Cinestream.png";
import infiniteScroll from "../media/infiniteScroll.png";

const Projects = ({darkMode}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Projects -</b></h2>
                <br></br>
                <Zoom>
                    <Row className='center'>
                        <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                            <br></br>
                            <center>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div className="flip-card-front">
                                            <Card.Img variant="top" src={cinestream}/>
                                            <Card.Body>
                                                <Card.Title align="center">Cinestream</Card.Title>
                                                <Card.Text>
                                                    <p align="center">A Netflix clone created for learning purposes using Next.js, JSON Web Token , Magic SDK, Hasura GraphQL, and Framer Motion.</p>
                                                
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>
                                                Developed a full-stack Netflix-inspired streaming platform with authentication, dynamic movie browsing, and responsive UI using React.js and modern web technologies.
                                            </p>

                                            <br/>
                                            <h4>Tech Stack</h4>
                                            <p>
                                                React.js| JavaScript| CSS| Firebase/API Integration| Responsive Design
                                            </p>
                                
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            <div>
                                <a href="https://cinestream-delta.vercel.app/login/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>
                                <a href="https://github.com/Priya31Gupta/netflix-clone" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Github Repo</Button>
                                </a>
                            </div>
                            <br></br>
                            </Card>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                            <br></br>
                            <center>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div className="flip-card-front">
                                            <Card.Img variant="top"  src={cafeSerendipity}/>
                                            <Card.Body>
                                                <Card.Title align="center">Café Serendipity</Card.Title>
                                                <Card.Text>
                                                    <p align="center"> A website for continetal cafe.</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>This is website for the <i>Café Serendipity</i>, an Angular-based web application that showcases the cafe's offerings, menu, and provides a seamless online reservation experience.
                                            <br/>
                                            Built using Angular.
                                            </p>
                                            <br/>
                                            <h4>Tech Stack</h4>
                                            <p> Bootstrap | Angular | Material UI | HTML | NGX-Toastr  | JavaScript | Emailjs-com </p>
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            <div>
                                <a href="https://cafe-serendipity.vercel.app/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>
                                <a href="https://github.com/Priya31Gupta/cafe-serendipity.git" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Github Repo</Button>
                                </a>
                            </div>
                            <br></br>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row className='center'>
                        <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                            <br></br>
                            <center>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div className="flip-card-front">
                                            <Card.Img variant="top"  src={infiniteScroll}/>
                                            <Card.Body>
                                                <Card.Title align="center">Infinite Scroll Media Feed</Card.Title>
                                                <Card.Text>
                                                    <p align="center">A high-performance infinite scrolling interface with dynamic API data loading, optimized rendering, and responsive UI behavior.</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Planned the UI for website and designed frontend using only HTML, CSS and JavaScript.
                                            <br></br>
                                            <br></br>
                                                Built the web page in just 2 days.
                                            <br/>
                                            <h4>Tech Stack</h4>
                                            <p> Node js | HTML | CSS | JavaScript</p>
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            <div> 
                            <a href="https://infinite-scroll-theta.vercel.app/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>  
                            <a href="https://github.com/Priya31Gupta/infiniteScroll" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Github Repo</Button>
                                </a>
                            
                            
                            </div>
                            <br></br>
                            </Card>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                            <br></br>
                            <center>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div className="flip-card-front">
                                            <Card.Img variant="top"  src={tcd}/>
                                            <Card.Body>
                                                <Card.Title align="center">Know Your Whether</Card.Title>
                                                <Card.Text>
                                                    <p align="center"> A web application which provides real-time weather information for a given location.</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>The Weather Forecast app is a comprehensive and user-friendly mobile application that provides accurate and up-to-date weather information to help users plan their day, stay prepared, and make informed decisions.
                                            <br/>
                                            Built using React.
                                            </p>
                                            <br/>
                                            <h4>Tech Stack</h4>
                                            <p> Bootstrap | ReactJs | Material UI | HTML | React-player | React-icons | React-i18next | JavaScript | I18next | Gasp | Antd</p>
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            <div>
                                <a href="https://whether-web.vercel.app/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>
                                <a href="https://github.com/Priya31Gupta/whether-web" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Github Repo</Button>
                                </a>
                            </div>
                            <br></br>
                            </Card>
                        </Col>
                    </Row>
                </Zoom>
                
            </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Projects;
