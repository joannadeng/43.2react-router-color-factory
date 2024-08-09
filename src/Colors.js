import React from "react";
import {Link,useParams,Navigate} from 'react-router-dom'

const Colors = ({color}) => {
    
    return (
        <div className="Colors" >
             <p><Link to={`/colors/${color[0]}`}>{color[0]}</Link></p>
        </div>
       
    )
}

export default Colors