import React from 'react';
import './Card.style.css'
import '../Chatbot'

import {Chatbot} from '../Chatbot'


const Postgrad = (props) =>{
    return (
        <div className='course-body'>
            <div className='course-header'>
                {props.payload.fields.courseTitle.stringValue}
            </div>
            <div className='course-content-me'>
                <a target="_blank" href={props.payload.fields.link.stringValue}> Click this link to view </a>
            </div>
        </div>
    );

}
export default Postgrad;