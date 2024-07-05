import React, { forwardRef, useState } from "react";
import Message from "./Message";
import Indicator from "./Indicators";
import Input from "./Input";
import ButtonSend from "./ButtonSend";


export const Window = forwardRef((props, ref) => {
    
    if(props) 
    return(<div>
        <Message {...props}/>
        <Indicator />
        <Input ref={ref} {...props}/>
        <ButtonSend {...props}/>
    </div>);  
})

export default Window;