import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Message.styles.css'

function Message(props){
    return(
            <Container>
                <Row>
                    <Col sm={12}>

                        <div className="card-style">
                            {props.speaks === 'k' &&
                                <Col sm={2}>
                                    <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-position">
                                        {props.speaks}
                                    </a>
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