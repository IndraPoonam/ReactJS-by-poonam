
// // import React from "react";
// import React, { useState } from "react";
// function Counter() {
//   // const [count, setCount] = useState(1);
//   const [data, setData] = useState([]);

//   // const Increment = () => {
//   //   setCount(count + 1);
//   //   console.log(count);
//   // };
//   // const Decrement = () => {
//   //   setCount(count - 1);
//   // };
//   // const Squar = () => {
//   //   setCount(count * count);
//   // };
//   const show = () => {
//     const data = [
//       {
//         name: "aman singh",
//         age: 23,
//         place: "rewa",
//       },
//       {
//         name: "suryanshu",
//         age: 25,
//         place: "govindgarh",
//       },
//     ];
//     setData(data);
//   };
//   return (
//     <>
//       <center>
//         {/* <h1 style={{ color: "aqua", underline: "2rem" }}>Counter</h1>
//         <h2 style={{ color: "blue", fontSize: "2rem" }}>Number==={count}</h2>
//         <button
//           style={{ color: "red", fontSize: "1.5rem" }}
//           onClick={() => Increment()}
//         >
//           Increment
//         </button>
//         <button
//           style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}
//           onClick={() => Decrement()}
//         >
//           Decrement
//         </button>
//         <button
//           style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}
//           onClick={() => Squar()}
//         >
//           squar value
//         </button> */}
//         <button
//           style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}
//           onClick={() => show()}
//         >
//           show
//         </button>
//       </center>
//       {/*       
//         <ul>
//           {data &&
//             data.map((user) => (
//               <li>
//                 {user.name},age:{user.age},place:{user.place}
//               </li>
//             ))}
//         </ul> */}

//       {data &&
//         data.map((user) => (
//           <h1>
//             name:{user.name}
//             ,age:{user.age},place:{user.place}
//           </h1>
//         ))}
//     </>
//   );
// }
// export default Counter;



// ===========================only counter-========================
// import React from "react";
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

 
 
  return (
    <>
      <center>
        <h1 style={{ color: "aqua", underline: "2rem" }}>Counter</h1>
        <h2 style={{ color: "blue", fontSize: "2rem" }}>Number==={count}</h2>
        <button
          style={{ color: "red", fontSize: "1.5rem" }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}
          onClick={() =>  setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}
          onClick={() => setCount(count * count)}
        >
          squar value
        </button>
       
      </center>
     

    
    </>
  );
}
export default Counter;