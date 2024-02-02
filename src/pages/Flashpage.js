import React from "react";
import Navbar from "../components/Navbar";
import Herocomponent from "../components/Herocomponent";
import Herocomponenttwo from "../components/Herocomponenttwo";
import Footer from "../components/Footer";
// import { ThemeProvider } from "@mui/material";
// import { Palette } from '@mui/icons-material';


function Flashpage(){
    return(
        <>
    
    <Navbar/>
   
<Herocomponent/>
<Herocomponenttwo/>
<Footer/>
        </>
    );

}
export default Flashpage;