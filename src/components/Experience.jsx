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
                <h2 className="lead" align="center"><b>- Experience -</b></h2>
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
                                            <p>
                                                Built scalable frontend features using React and Angular for enterprise web applications.
                                            </p>

                                            <p>
                                                Improved application responsiveness and optimized UI performance for better user experience.
                                            </p>

                                            <p>
                                                Collaborated with developers and designers in Agile Scrum environments to deliver production-ready features.
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                            </center>
                            <br></br>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
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
