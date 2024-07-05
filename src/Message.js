import React, { useState } from "react";
import "./Message.css"


export const Message = (props) => {
   

    if(props.messages)
    return (<div className="">
        <div className="info-title">
            <span className="title">user:</span>
            <p>{props.user}</p>
        </div>

        <div className="info-title">
            <spa className="title">message:</spa>
            
              
                {props.messages.map(message => {
                    
                    if(props.user == message.addresse)
                        return <p>{message.text}</p>
                })}
            
        </div>

    </div>);

    return
}

export default Message;