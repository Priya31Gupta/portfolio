import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'

import starwars from "../media/starwars.png"

import tcd from '../media/weather-app.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import gogroup from "../media/GoGroup.webp";
import abhi from "../media/abhi.jpg";
import cafeSerendipity from "../media/readme-home.png";

const Experience = ({darkMode}) => {

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
                                            <Card.Img variant="top" className='gogrop-img' src={gogroup}/>
                                            <Card.Body>
                                                <Card.Title align="center">Gogroup</Card.Title>
                                                <Card.Text>
                                                    <p align="center"> Software Engineer </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Domain - Web Development</p>
                                            <p>Worked on UI/UX planning and designing to enhance the user experience.</p>
                                            <p>
                                            Accelerated development time by 20% using (Scrum) Agile Methodology.
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                            </center>
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
                                            <Card.Img variant="top" src={abhi}/>
                                            <Card.Body>
                                                <Card.Title align="center">Abhius clone</Card.Title>
                                                <Card.Text>
                                                    <p align="center">A web Application where you can book Train tickets, Bus tickets, and Hotels.</p>
                                                
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>A web Application where you can book Train tickets, Bus tickets, and Hotels
                                            <br></br>It has all the basic sorting, filtering function.
                                            <br/>
                                            A Collaborative Project built by a team of four members.
                                            </p>
                                            <br/>
                                                    <h4>Tech Stack</h4>
                                            <p> ReactJS | Express |  HTML | MongoDB | Mongoose |CSS | JavaScript</p>
                                        
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            <div>
                                <a href="https://abhi-bus-clone.vercel.app/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>
                                <a href="https://github.com/Priya31g/abhibus-clone" target="_blank" rel="noreferrer noopener">
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
                                            <Card.Img variant="top"  src={starwars}/>
                                            <Card.Body>
                                                <Card.Title align="center">Star Wars Character Details</Card.Title>
                                                <Card.Text>
                                                    <p align="center">While learning fetch api , I am building a web app to get personal details of all actors who played the characters.</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Planned the UI for website and designed frontend using only HTML ans CSS.
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
                            <a href="https://star-wars-character-details-clone-29j6q55hh-priyakumarigupta.vercel.app" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>  
                            <a href="https://github.com/Priya31g/Star-Wars" target="_blank" rel="noreferrer noopener">
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
                                <a href="https://abhi-bus-clone.vercel.app/" target="_blank" rel="noreferrer noopener">
                                    <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} className="sbtn">View Project</Button>
                                </a>
                                <a href="https://github.com/Priya31g/abhibus-clone" target="_blank" rel="noreferrer noopener">
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

export default Experience
