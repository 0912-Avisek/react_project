import { useState} from 'react';
import React from 'react';

function UseEff() {

  const [avi, setAvi] = useState(0)

// when we use state variable then react know that variable is changed and it re render the component
// so if we do changes in normal addvalue function it will not re render the component

// let avi= 23;
//   const addvalue=()=>{
//     avi=avi+1;
//   }
 


  const addvalue=()=>{
    if(avi<10)
    setAvi(avi+1);

    else
    alert("value is max 10");
  
  }


  return (
    //evaluted expression we write in return block not js 
    <>
    <div>
      <h1>Hello React! ya Me {avi}</h1>
    </div>

    <button onClick={ addvalue }>Click Me {avi}</button>


    </>
  )
}

export default UseEff
