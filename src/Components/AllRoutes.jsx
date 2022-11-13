import {Routes,Route} from "react-router-dom"
import Links from "./Links";
import Login from "./login";
function AllRoutes() {
    return <div>
         
       <Routes>
        <Route path="/" element={<Links/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes> 
    
    </div>
  
      {/* Add Home, Login and dashboard  */}
  }
  
  export default AllRoutes;

