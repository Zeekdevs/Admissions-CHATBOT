import React, {useState} from 'react'
import './UI.style.css'
import {MdCancel} from 'react-icons/md'
import {Form} from "react-bootstrap";
import {IoSend} from "react-icons/io5";
import {AiFillRobot} from "react-icons/ai";


class UIView extends React.Component{

    render() {

        const hideCircle = e => {
            document.getElementById("b-circle").style.display = 'none';
            document.getElementById("conversation-area").style.display = 'block';

        }

        const showCircle = e => {
            document.getElementById("b-circle").style.display = 'block';
            document.getElementById("conversation-area").style.display = 'none';
        }

        return(
            <div className="ui-view">

                <div onClick={hideCircle} id="b-circle" className="bot-circle">
                    <AiFillRobot
                        className="robot-icon"

                    />

                </div>

                <div id="conversation-area">
                    <div className="area-border">
                        <MdCancel onClick={showCircle} className="cancel"/>
                    </div>
                    <div className="footer">
                        <h5>POWERED BY <span>KAYLABOT</span></h5>
                    </div>
                    <div className="text-area">

                        <Form.Control
                            type="text"
                            id="type-here"
                            placeholder="Type message here.."
                        />
                        <IoSend
                            className="send-icon"

                        />

                    </div>
                </div>

                <h1>this is the beginning</h1>
            </div>

        );
    }
}

export default UIView;