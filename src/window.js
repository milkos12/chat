import React from "react";
import Message from "./Message";
import Indicator from "./Indicators";
import Input from "./Input";
import ButtonSend from "./ButtonSend";

export const Window = () => {
    return(<div>
        <Message />
        <Indicator />
        <Input />
        <ButtonSend />
    </div>);
}

export default Window;