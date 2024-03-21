// import React from 'react'
// import {  useState } from 'react';

// const Login = () => {
//   const [accesstoken, setAccessToken] = useState('');
//   const handleLogin = () => {
//     const CLIENT_ID = "123789108396-srcbbufm4gg3r3b2shg5s8emmo8bt2ud.apps.googleusercontent.com"
//     const REDIRECT_URL = 'http://localhost:3000/inboxmsg'
//     const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
//     const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;

//     window.location.href = AUTH_URL;
//   };

// //   const getAccessToken = () => {
   

// //   };

  
  
//   return (
//     <div>
//       {accesstoken ? (
//         <div>
//           <h1>Access token obtained</h1>
//           <p>access Token:{accesstoken}</p>
//         </div>) : (
//         <>

//           <button onClick={() => handleLogin()}>LOGIN WITH GOOGLE</button>
//           {/* <button onClick={() => getEmaildata()}>GET EMAIL</button> */}

//           {/* <button onClick={() => fetchMail("18e5632d9618b2db")}>fetch mail</button> */}

//         </>
//       )

//       }
//     </div>
//   )
// }

// export default Login


import { useEffect, useState } from "react";
function Login () {
    
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
      const CLIENT_ID = "123789108396-srcbbufm4gg3r3b2shg5s8emmo8bt2ud.apps.googleusercontent.com"
          const REDIRECT_URL = 'http://localhost:3000/inboxmsg'
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly"
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    };
    const getAccessToken = () => {
        const url = window.location.href
        const token = url.match(/access_token=([^&]+)/)
        localStorage.setItem("Token",token && token[1])
        console.log("Token is", localStorage.getItem("Token"))

    }
    useEffect(() => (
        getAccessToken()
    ), [])

    return (
        <>
          <div>
            {accessToken ? (
                <div>
                    <h1>Access token</h1>
                    <p>Access Token: {accessToken}</p>
                </div>) : (
                <>
                    <button onClick={handleLogin}>Login with google</button>
                    {/* <button onClick={() => getEmailData()}> Get Emails</button>
                    <button onClick={() => fetchMail("18e462bcf161bc72")}> Fetch Emails</button> */}
                </>
            )
            }
        </div>
        </>
    )
}

export default Login