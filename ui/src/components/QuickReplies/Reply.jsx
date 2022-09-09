import React from 'react'
import './QuickReplies.style.css'

function Reply(props){
    if (props.reply.structValue.fields.payload){
        return (
            <div  className='btn-medium btn-floating waves-effect waves-light  btn-styles'
               onClick={(event) =>{
                   props.click(
                       event,
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue

                   )}

            }>
                <div className="val">
                    {props.reply.structValue.fields.text.stringValue}
                </div>
            </div>
        );

    }else {
        return (
            <a href={props.reply.structValue.fields.link.stringValue} className='btn-large btn-floating waves-effect waves-light blue'>
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }
}

export default Reply