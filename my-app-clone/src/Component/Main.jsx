import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import  Leftside from "./Leftside";
import Mail from "./Mail";
import Starred from "./Starred";



function Main (){
    return (
 <div class="body-wrapper">
<Leftside/>
<Header/>
{/* <Mail/> */}
<Routes><Route path="/mail" element={<Mail/>}></Route>
<Route path="/starred" element={<Starred/>}></Route>
</Routes>

<Container/>
</div> 
    )
};
export default Main;