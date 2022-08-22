import React, { Component } from "react";
import axios from "axios/index";
import Message from "./Message/Message";
import './UI.style.css'
import {MdCancel} from 'react-icons/md'
import {Col, Container, Form, Row} from "react-bootstrap";
import {IoSend} from "react-icons/io5";
import {AiFillRobot} from "react-icons/ai";
import Cookies from "universal-cookie/es6";
import {v4 as uuid} from 'uuid';

const cookies = new Cookies(); // object for cookies
class Chatbot extends Component{
    endMessage;
    talkInput;
    constructor(props) {
        super(props);

        this.inputKeyPressHandle = this.inputKeyPressHandle.bind(this);
        this.state = {
            messages: [] // empty array where all messages are called from
        }

        if(cookies.get('userId') === undefined){
            cookies.set('userId', uuid(), {path: '/'}) // creates a cookie param cookie name, unique id and path for cookie accessibility
        }
        console.log(cookies.get('userId'));
    }

    async text_query(text){
        let says ={
            speaks: 'me',
            msg:{
                text:{
                    text: text
                }
            }
        }

        this.setState({messages: [...this.state.messages, says]})

        const res =await axios.post('api/text_query',{text})

        for (let msg of res.data.fulfillmentMessages){
            let says = {
                speaks: 'k',
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]}) //bot previous messages and new message added to new array


        }
    }

    async event_query(event){
        const res = await axios.post('api/event_query', {event})
        console.log(res)
        for (let msg of res.data.fulfillmentMessages){
            let says = {
                speaks: 'k',
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]}) //bot previous messages and new message added to new array
        }

    }

   componentDidMount() {
        this.event_query('Welcome')
    }

    componentDidUpdate() {
        this.endMessage.scrollIntoView({behavior: 'smooth'})
        this.talkInput.focus()
    }


    // method to Render Message
    messageRenders(stateMessages){
        if (stateMessages){
            return stateMessages.map((message, i)=>{
                return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />

            });
        } else{
            return null;
        }
    }
    // method to listen for user input
    inputKeyPressHandle(e){
        if(e.key === 'Enter'){
            console.log('enter key was pressed')
            this.text_query(e.target.value);
            console.log(e.target.value)
            e.target.value = '';
        }

    }

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
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div className="ui-view">

                            <div onClick={hideCircle} id="b-circle" className="bot-circle">
                                <AiFillRobot className="robot-icon" />
                            </div>

                            <div id="conversation-area">
                                <div className="area-border">
                                    <MdCancel onClick={showCircle} className="cancel"/>
                                </div>
                                <div className="conversation">
                                    {this.messageRenders(this.state.messages)}
                                    <div
                                        ref={(msgend) => {
                                            this.endMessage = msgend;
                                        }}
                                        style={{float: 'left', clear:'both'}}>

                                    </div>
                                </div>
                                <div className="text-area">
                                    <input
                                        ref={(input) =>{
                                            this.talkInput = input
                                        }}
                                        type="text"
                                        onKeyPress={this.inputKeyPressHandle}
                                        id="type-here"
                                        placeholder="Type message here.."
                                    />
                                    <IoSend
                                        className="send-icon"

                                    />

                                </div>
                                <div className="footer">
                                    <h5>POWERED BY <span>KAYLABOT</span></h5>
                                </div>

                            </div>

                        </div>

                    </Col>
                </Row>

            </Container>


        );
    }
}

export default Chatbot;