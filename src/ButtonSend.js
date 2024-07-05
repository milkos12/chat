import React, { useState } from "react";

export const ButtonSend = (props) => {
    const [user, setUser] = useState(props.user)
    const handleSend = () => {
        props.sendMessage(user)
    }
    return (<input type="button" value={"Send"} onClick={handleSend}/>);
}

export default ButtonSend