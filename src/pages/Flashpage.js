import React from "react";
import Navbar from "../components/Navbar";
import Herocomponent from "../components/Herocomponent";
import Herocomponenttwo from "../components/Herocomponenttwo";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import CourseCard from "../components/CourseCard";
// import { ThemeProvider } from "@mui/material";
// import { Palette } from '@mui/icons-material';


const Flashpage = () => {
    return (
        <>

            <Navbar />

             <Herocomponent />
             <Cards />
             <Herocomponenttwo />
           
            <Footer />
             
        </>
    );

}
export default Flashpage;