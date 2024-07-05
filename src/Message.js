import React, { useState } from "react";
import "./Message.css"


export const Message = () => {
    const [text, setText] = useState("hello, how are you doing");
    const [user, setUser] = useState("pedro");

    return (<div className="">
        <div className="info-title">
            <span className="title">user:</span>
            <p>{user}</p>
        </div>

        <div className="info-title">
            <spa className="title">message:</spa>
            <p>{text}</p>
        </div>

    </div>);
}

export default Message;