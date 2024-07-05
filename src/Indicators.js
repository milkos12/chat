import React, { useState } from "react";

export const Indicator = () => {
    const [state, setState] = useState("escribiendo");
    return(<div>
        {state}
    </div>);
}

export default Indicator;