import React from 'react'
import './Card.style.css'
import '../Chatbot'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Chatbot} from '../Chatbot'

function PageCards(props){
    return(
        <Card style={{ width: '18rem', borderRadius: '10px', marginBottom: '50px' }}>
            <Card.Header className='card-header'>
                {props.payload.fields.title.stringValue}

            </Card.Header>
            <ListGroup variant="flush" className='card-content-me'>
                <ListGroup.Item>
                    <a href=""
                       onClick={(event) =>
                           props.click(
                               event,
                               props.payload.fields.undergraduate.stringValue
                           )

                       }>
                        {props.payload.fields.undergraduate.stringValue}
                    </a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href=""
                       onClick={(event) =>
                           props.click(
                               event,
                               props.payload.fields.postgraduate.stringValue
                           )

                       }>
                        {props.payload.fields.postgraduate.stringValue}
                    </a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href=""
                       onClick={(event) =>
                           props.click(
                               event,
                               props.payload.fields.research.stringValue
                           )

                       }>
                        {props.payload.fields.research.stringValue}
                    </a>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default PageCards
