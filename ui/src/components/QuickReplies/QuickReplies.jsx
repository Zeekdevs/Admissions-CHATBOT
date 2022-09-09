import React, { Component} from "react";
import Reply from "./Reply";
import {Col} from "react-bootstrap";
import './QuickReplies.style.css'

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
    }
    //method to handle quick reply from chatbot
    clickHandler(event, payload, text){
        this.props.clickReply(event, payload, text);


    }

    renderReply(reply, i){
        return <Reply key={i} click={this.clickHandler} reply={reply}/>
    }

    quickRepliesRender(qr){
        if(qr){
            return qr.map((reply, i) => {
                return this.renderReply(reply, i);
            })
        }else {
            return null;
        }



    }


    // method to Render all quick replies
    render() {
        return(
            <div className="card-style">
                    <Col sm={2}>

                            <a href="#" className="btn-floating btn-medium waves-effect bot-speaks-position">
                                {this.props.speaks}
                            </a>
                    </Col>
                <div className="message-panel qr-panel">
                    <Col sm={10}>
                        {this.props.speaks &&
                            <p>{this.props.text.stringValue}</p>
                        }
                        <a href="" className='action-btn'>
                            {this.quickRepliesRender(this.props.payload)}
                        </a>

                    </Col>
                </div>
            </div>

        );
    }

}

export default QuickReplies