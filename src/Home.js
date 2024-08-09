import React,{ useState } from "react";
import Colors from "./Colors";
import {Link} from 'react-router-dom'

function Home({colors}){

  const colorArr = Object.entries(colors)
    
    return (
        <>
          <div>
            <p>Welcome to the color factory</p>
            <h1><Link to='/colors/new'>Add a color</Link></h1>
          </div>
          <div>
            <p>Please select a color</p>
            {colorArr.map(color => <Colors color={color}/>)}
         
          </div>
        </>
        
    )
}

export default Home;