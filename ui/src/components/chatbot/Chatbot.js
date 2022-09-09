import React, { Component } from "react";
import axios from "axios/index";
import './UI.style.css'
import './Cards/Card.style.css'
import {MdCancel} from 'react-icons/md'
import {Col, Container, Form, Row} from "react-bootstrap";
import {IoSend} from "react-icons/io5";
import {AiFillRobot} from "react-icons/ai";
import Cookies from "universal-cookie/es6";
import {v4 as uuid} from 'uuid';
import Message from "./Message/Message";
import PageCards from "./Cards/PageCards";
import QuickReplies from "../QuickReplies/QuickReplies";
import {click} from "@testing-library/user-event/dist/click";
import Undergrad from "./Cards/Undergrad";
import Research from "./Cards/Research";
import Postgrad from "./Cards/Postgrad";




const cookies = new Cookies(); // object for cookies
class Chatbot extends Component{
    endMessage;
    talkInput;
    constructor(props) {
        super(props);

        this.inputKeyPressHandle = this.inputKeyPressHandle.bind(this);
        this.quickReplyHandler = this.quickReplyHandler.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.state = {
            messages: [] ,// empty array where all messages are called from
            showBot: false
        }

        if(cookies.get('userId') === undefined){
            cookies.set('userId', uuid(), {path: '/'}) // creates a cookie param cookie name, unique id and path for cookie accessibility
        }
        console.log(cookies.get('userId'));
    }

    async text_query(textQuery){

        let says ={
            speaks: 'me',
            msg:{
                text:{
                    text: textQuery
                }
            }
        }

        this.setState({messages: [...this.state.messages, says]})

        const res = await axios.post('api/text_query',{text: textQuery, userID: cookies.get('userId')}) //parsing the cookie session and textQuery to df
        for (let msg of res.data.fulfillmentMessages){
            console.log(JSON.stringify(msg));
            let says = {
                speaks: 'k',
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]}) //bot previous messages and new message added to new array


        }
    }

    async event_query(eventQuery){
        const res = await axios.post('api/event_query', {event: eventQuery , userID: cookies.get('userId')}) // parsing the cookie session  and eventQuery to df
        for (let msg of res.data.fulfillmentMessages){
            let says = {
                speaks: 'k',
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]}) //bot previous messages and new message added to new array
        }

    }



    cardClick(event,stringValue){
        event.preventDefault();
        event.stopPropagation();
        if (stringValue === 'Undergraduate' || 'Postgraduate' || 'Research' ){
            this.text_query(stringValue).then(res =>{return console.log('course category filed')} );

        }else {
            console.log('err')
        }



    }

    // welcome message lifecycle

    // message life cycle
    componentDidUpdate() {
        this.endMessage.scrollIntoView({behavior: 'smooth'});
        if(this.talkInput){
            this.talkInput.focus();
        }

    }

    show(event){
        event.preventDefault()
        event.stopPropagation()
        this.setState({showBot:true});
    }

    hide(event){
        event.preventDefault()
        event.stopPropagation()
        this.setState({showBot:false});
    }

    //card render
    renderCards(cards){
        return cards.map((card, i) =>
            <PageCards key={i} click={this.cardClick} payload={card.structValue} />


           // payload={card.structValue}/>
        )
    }


    renderUndergrad(undergraduate){
        return undergraduate.map((undergrad, i)=>
            <Undergrad key={i} payload={undergrad.structValue}/>

        )
    }
    renderResearch(research){
        return research.map((phd, i)=>
            <Research key={i} payload={phd.structValue}/>

        )
    }
    renderPostgrad(postgraduate){
        return postgraduate.map((postgrad, i)=>
            <Postgrad key={i} payload={postgrad.structValue}/>

        )
    }
    // render message implementation
    messageToRender(message, i){
        if (message.msg && message.msg.text && message.msg.text.text){// check if message is text
            return <div>
                <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
            </div>
        } else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.cards){ // check if message is card
            return <div key={i}>
                <div style={{}}>
                    <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-card-position">
                        {message.speaks}
                    </a>
                </div>
                <div key={i} className='card-render-bg'>
                    {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                </div>
            </div>

        } else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.undergraduate){ // check if message is undergrad card
            return <div key={i}>
                <div style={{}}>
                    <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-card-position">
                        {message.speaks}
                    </a>
                </div>
                <div key={i} className='card-render-bg' style={{ }}>
                    <div className='course-render-style'>
                        {this.renderUndergrad(message.msg.payload.fields.undergraduate.listValue.values)}
                    </div>
                </div>
            </div>

        }  else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.research){ // check if message is undergrad card
            return <div key={i}>
                <div style={{}}>
                    <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-card-position">
                        {message.speaks}
                    </a>
                </div>
                <div key={i} className='card-render-bg' style={{ }}>
                    <div className='course-render-style'>
                        {this.renderResearch(message.msg.payload.fields.research.listValue.values)}
                    </div>
                </div>
            </div>

        } else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.postgraduate){ // check if message is undergrad card
            return <div key={i}>
                <div style={{}}>
                    <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-card-position">
                        {message.speaks}
                    </a>
                </div>
                <div key={i} className='card-render-bg' style={{ }}>
                    <div className='course-render-style'>
                        {this.renderPostgrad(message.msg.payload.fields.postgraduate.listValue.values)}
                    </div>
                </div>
            </div>

        } else if (message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.quickReplies){
            return <QuickReplies
                text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                key={i}
                clickReply={this.quickReplyHandler}
                speaks={message.speaks}
                payload={message.msg.payload.fields.quickReplies.listValue.values}
            />

        }
    }



    componentDidMount() {

        const circle = document.getElementById('b-circle');

        circle.addEventListener('click',()=>{
            console.log('it as been clicked')
            this.event_query('Welcome').then(res =>{return console.log('welcome event filed')} )
            this.event_query('recommend').then(res =>{return console.log('recommendation filed')} )
        })


    }


    // method to Render Message
    messageRender(fromMsgToRender){
        if (fromMsgToRender){
            return fromMsgToRender.map((message, i)=>{
                return this.messageToRender(message, i);
            });
        } else{
            return null;
        }
    }
    // method to listen for user input
    inputKeyPressHandle(e){
        if(e.key === 'Enter'){
            this.text_query(e.target.value).then(res => {return console.log('filed')});
            e.target.value = '';
        }

    }


    // method to handle quick replies

    quickReplyHandler(event, payload, text){
        event.preventDefault();
        event.stopPropagation();

        this.text_query(text).then(r => {return console.log('filed')});
    }



   // main component render
    render() {

        const hideCircle = e => {
            document.getElementById("b-circle").style.display = 'none';
            document.getElementById("conversation-area").style.display = 'block';

        }
        const showCircle = e => {
            document.getElementById("b-circle").style.display = 'block';
            document.getElementById("conversation-area").style.display = 'none';
        }
        if(this.state.showBot){
            return(
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className="ui-view">
                                <div  id="b-circle" className="bot-circle">
                                    <AiFillRobot onClick={this.show}  className="robot-icon" />
                                </div>
                            </div>


                            <div id="conversation-area">
                                <div className="area-border">
                                    <MdCancel onClick={this.hide} className="cancel"/>
                                </div>
                                <div className="conversation">
                                    {this.messageRender(this.state.messages)}
                                    <div
                                        ref={(msgend) =>{this.endMessage = msgend;}}
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
                                        placeholder="Type message here.."
                                    />
                                    <IoSend className="send-icon" />
                                </div>

                            </div>
                        </Col>
                    </Row>

                </Container>


            );
        }else{
            return (
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className="ui-view">
                                <div onClick={this.show} id="b-circle" className="bot-circle">
                                    <AiFillRobot className="robot-icon" />
                                </div>
                            </div>
                            <div
                                ref={(msgend) =>{this.endMessage = msgend;}}
                                style={{float: 'left', clear:'both'}}>
                            </div>
                        </Col>
                    </Row>
                </Container>

            );
        }
    }
}

export default Chatbot;