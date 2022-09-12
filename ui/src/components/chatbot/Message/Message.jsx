import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Message.styles.css'
import {AiFillRobot} from "react-icons/ai";

function Message(props){
    return(
            <Container>
                <Row>
                    <Col sm={12}>

                        <div className="card-style">
                            {props.speaks === 'KAYLA' &&
                                <Col sm={2}  style={{color:'#000', marginBottom:'10px'}} >
                                    <a href="#" className="bot-font-position">
                                        <AiFillRobot style={{
                                            fontSize: '20px',
                                            marginBottom: '-5px',
                                            color: '#fff'
                                        }
                                        }/>
                                    </a>

                                    {props.speaks}
                                </Col>
                            }
                            <div>
                                <Col sm={10}>
                                    <div className="message-panel">
                                        <span className="black-text">
                                        {props.text}

                                        </span>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                    {props.speaks === 'me' &&
                        <Col sm={2}>
                            <a href="#" className="btn-floating btn-medium waves-effect user-speaks-position">
                                {props.speaks}
                            </a>
                        </Col>
                    }

                </Row>
            </Container>

    );
}

export default Message;