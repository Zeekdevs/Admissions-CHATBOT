import React from 'react';
import './Contact.styles.css'
import Header from '../Header/Header.view';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RiUserFill} from 'react-icons/ri'
import {FiShare2} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter,AiOutlineDribbble } from 'react-icons/ai';
import Form from 'react-bootstrap/Form'


const Contact = () =>(

   <div className='contact'>
    <Header/>

    <Container>
        <Row>
            <Col sm={12} md={12} lg={12} >
                <section className="contact-area">
                    <h2 className='section-title'>
                        CONTACT ME
                    </h2>
                    <Container>
                        <Row>
                            <Col md={12} lg={6} >
                                <div className="d-flex align-items-stretch mb-4 info-area">
                                    <div className="content-area">
                                        <div className="icon-area">
                                            <div className='icons-border'>
                                                <RiUserFill className='icons'/>
                                            </div>
                                        </div>

                                        <h3>Isaac Isewede</h3>
                                        <p>Hull, United Kingdom</p>

                                    </div>
                                </div>
                                <div className="d-flex align-items-stretch mb-4 info-area">
                                    <div className="content-area">
                                        <div className="icon-area">
                                            <div className='icons-border'>
                                                <FiShare2 className='icons'/>
                                            </div>
                                        </div>
                                        <h3>Social Accounts</h3>
                                        <p>
                                        <AiFillGithub className='social-acc-icons'/>
                                        <AiFillLinkedin className='social-acc-icons'/>
                                        <AiOutlineTwitter className='social-acc-icons'/>
                                        <AiOutlineDribbble className='social-acc-icons'/>
                                        </p>
                                    </div>


                                </div>
                                <div className="d-flex align-items-stretch mb-4 info-area">
                                    <div className="content-area">
                                        <div className="icon-area">
                                            <div className='icons-border'>
                                                <MdAlternateEmail className='icons'/>
                                            </div>
                                        </div>
                                        <h3>Email</h3>
                                        <p>
                                            ukzeek0@gmail.com
                                        </p>
                                    </div>


                                </div>
                            </Col>
                            <Col md={12} lg={6} >
                                <div className="d-flex align-items-stretch mb-4 info-area h">
                                    <div className="content-area">
                                        <form method='' id='contact-form' className='contact-form'>
                                            <Form>
                                                <Row>
                                                    <Col md={12} lg={5} >
                                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name *"/>
                                                        <div className="validate name-validate"></div>


                                                    </Col>

                                                    <Col md={12} lg={7} >
                                                        <input type="text" name="email" class="form-control" id="email" placeholder="Your Email *"/>
                                                        <div className="validate email-validate"></div>

                                                    </Col>

                                                </Row>
                                                <Form.Group className="message-area">
                                                    <textarea class="form-control" name="message" id="message" rows="5" placeholder="Message *"></textarea>

                                                </Form.Group>

                                                <div class="text-center mb-2">
                                                    <button class="send-message-btn" type="submit">Send Message
                                                    </button>
                                                </div>


                                            </Form>


                                        </form>


                                    </div>
                                </div>

                            </Col>

                        </Row>
                    </Container>

                </section>
            </Col>
        </Row>
    </Container>

   </div>

);

export default Contact
