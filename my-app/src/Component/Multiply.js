// import React from 'react'

// function Multiply() {
//     let multiply=1;
//     for(let i=2; i<=10; i++){
// multiply= multiply*i;
//     }
//   return (
//    <div>
//     <h1>{multiply}</h1>
//    </div>
//   )
// }

// export default Multiply

import React from 'react'



function Multiply() {
    const poonam=()=>{
        const box=document.getElementById('box');
        if(box.style.backgroundColor==="black"){
            document.getElementById('box').style.backgroundColor="black";
            document.getElementById('box').style.backgroundColor="green";
        }
        else{
            document.getElementById('box').style.backgroundColor="green";
            document.getElementById('box').style.backgroundColor="black";

        }
// document.getElementById("root").style.backgroundColor="green";
    }
    // document.getElementById("root").style.color="red";
    // const laptop=()=>{
    //     document.getElementById("root").style.backgroundColor="red";
    // }
          return (
    <div>
      <center> <h1 >Poonam Singh </h1>
       <button onClick={poonam}>firstbutton</button>
         {/* <button onClick={laptop}>secondbutton</button>  */}
<h2>I am belong from Rewa</h2>
<h3>I had completed graduation</h3></center> 



    </div>
  )
}

export default Multiply