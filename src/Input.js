import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
    return(
        <div ref={ref}>
            <select>
            {props.userAll.map(user=>{
                return <option value={user.name}>{user.name}</option>
            })}
            </select>
            <input type="text" placeholder="Write your message"/>
        </div>
    );
})

export default Input