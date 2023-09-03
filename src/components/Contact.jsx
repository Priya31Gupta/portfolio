import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/contact-light.svg';
import contactDark from '../media/contact-dark.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import mail from "../media/mail.png"

function Contact({ darkMode }) {
    (function () {
        emailjs.init("5Fuqf6p70pms79UWs");
    })();
    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        message: '',
        from_email:'',
        to_email: 'priyakumarigupta790@gmail.com',
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        emailjs.send('service_4mgnmk3', 'contact_form', templateParams)
            .then((response) => {
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! I will get back to you as soon possible",
                    icon: "success",
                });
            }, (err) => {
                swal({
                    title: "Oops! ",
                    text: "Something went wrong! Please try again!",
                    icon: "error",
                });
            });
        
        setTemplateParams({
            from_name: '',
            message: ''
        });
    };

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
                <Row>
                    <Col lg={4}>
                        <br></br>
                        <h2 className="lead">Contact me!</h2>
                        <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>
                        <br></br>
                        <img src={darkMode ? contactDark : contactLight} alt="contact" className="contact-img img-fluid" />
                    </Col>
                    <Col lg={7} style={{ marginLeft: "42%", marginTop: "-30%" }}>
                            <br></br>
                        <Form className='form' onSubmit={e => onSubmit(e)}>
                        <Form.Group>
                            <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                        </Form.Group>
                            
                        <Form.Group>
                            <Form.Control  onChange={e => onInputChange(e)} value={templateParams.message} name="message"  as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant={darkMode ? "outline-light sbtn2" : "outline-dark sbtn"} type="submit">
                            Submit
                        </Button>
                        </Form> 
                    </Col>
                    
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col lg={1}>
                        <a href="https://github.com/Priya31g" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light " : "outline-dark sbtn"} target="_blank" rel="noreferrer noopener" style={{ margin: "1% 3%" }} className="skills-btn">
                                <FontAwesomeIcon className="skill" size='2x' icon={faGithub} />
                            </Button>
                        </a>
                    </Col>
                    <Col lg={1}>
                        <a href="https://www.linkedin.com/in/priya-kumari-gupta/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark sbtn"} target="_blank" rel="noreferrer noopener" style={{ margin: "1% 3%" }} className="skills-btn">
                                <FontAwesomeIcon className="skill" size='2x' icon={faLinkedin} />
                            </Button>
                        </a>
                    </Col>
                    <Col lg={1}>
                        <a href="https://twitter.com/Priya31g" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark sbtn"} target="_blank" rel="noreferrer noopener" style={{ margin: "1% 3%" }} className="skills-btn">
                                <FontAwesomeIcon className="skill" size='2x' icon={faTwitter} />
                            </Button>
                        </a>
                    </Col>
                    <Col lg={1}>
                        <a href="mailto:priyakumarigupta790@gmail.com" >
                            <Button variant={darkMode ? "outline-light" : "outline-dark sbtn"} className="skills-btn" style={{ marginTop: '0' }}>
                                {/* <p align="center" style={{ fontSize: "23px", marginBottom: "0%" }} className="skill-txt">
                                <i class="fa fa-envelope fa-lg skill" aria-hidden="true"></i>
                                </p> */}
                                <i style={{ margin: "1% 3%"}} class="fa fa-envelope fa-2x skill" aria-hidden="true"></i>
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact
