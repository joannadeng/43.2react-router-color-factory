import {Routes,Route,Navigate} from 'react-router-dom';
import React,{ useState, useEffect } from "react";
import Home from './Home';
import Color from './Color';
import NewColorForm from './NewColorForm';

const AllRoutes = () => {

const initialColors = {
  red:"red",
  green:"green",
  blue:"blue"
}

// const [colors, setColors] = useState(initialColors)

const [colors, setColors] = useState(() => {
  let initialValue;
  initialValue = JSON.parse(window.localStorage.getItem('initialColors'))|| initialColors;
  return initialValue;
});

useEffect(() => {
  window.localStorage.setItem('initialColors',JSON.stringify(colors))
},[colors])

    return (
        <Routes>
          <Route path='/colors' element={<Home colors={colors}/>}></Route>
          <Route path='/colors/new' 
          element={<NewColorForm 
                   colors={colors}
                   setColors={setColors} 
                   />}></Route>
          <Route path='/colors/:color' element={<Color  colors={colors}/>}></Route>
          <Route path="*" element={<Home colors={colors}/>}></Route>
          
      </Routes>
    )
}

export default AllRoutes;