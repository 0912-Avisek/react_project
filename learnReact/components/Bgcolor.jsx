import React from 'react'
import { useState } from 'react';

const Bgcolor = () => {
  const [bgColor, setBgColor] = useState("black");

  function colorChanger(color){
    setBgColor(color);
  }

  return (
    <div className =" w-full h-screen  duration-200" style={{ backgroundColor: bgColor}}>
      <button className="bg-red-500 text-white p-2 m-2 rounded"  onClick={ () => colorChanger("red")}>Red</button>
      <button className="bg-green-500 text-white p-2 m-2 rounded"  onClick={ () => colorChanger("green")}>Green</button>
      <button className="bg-blue-500 text-white p-2 m-2 rounded"  onClick={ () => colorChanger("blue")}>Blue</button> 
    </div>
  )
}

export default Bgcolor