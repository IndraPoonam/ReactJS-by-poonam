

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Usestate() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }
// export default Usestate;

import React,{useState} from 'react'

function Usestate() {
  const [data,setData] =useState("poonam")
  return (
    <div>
   <center>  <h1>Hello World !</h1>
      <h2>{data}</h2>
      <button onClick={()=>setData("Indian Poonam")}>Update data</button></center> 
    </div>
  );
}

export default Usestate