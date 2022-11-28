import { useState } from "react";
import RightBar from "./RightBar";
function Scorer() {
    const[Score, setScore]=useState(501);
    return (  
<RightBar sc={Score}/>


    );
}

export default Scorer;