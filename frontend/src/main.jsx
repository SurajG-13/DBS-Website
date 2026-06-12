// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// main.jsx (or index.jsx)

import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";



import Home from "./pages/Home/Home.jsx";
import Layout from "./layout/Layout.jsx";

import Faculty from "./pages/Faculty/Faculty.jsx";
import Facilites from "./pages/Facilities/Facilities.jsx";

import Houses from "./pages/Cocurricular/Houses.jsx";
import Activities from "./pages/Cocurricular/Activities.jsx";
import AcademicCalendar from "./components/AcademicCalender.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import EventPage from "./pages/Gallery/Event.jsx";

import Admissions from "./pages/Admission/Admission.jsx";
import ContactUs from "./pages/Contact/ContactUs.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import RulesAndRegulations from "./pages/Cocurricular/Rules.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* Index route for the root path (/) */}
            <Route path="" element={<Home />} /> 
            <Route path='/About-Us' element={< AboutUs/>} />
            <Route path='/School-Faculty' element={<Faculty/>} />
            <Route path='/School-Houses' element={<Houses/>} />
            <Route path='/School-Facilities' element={<Facilites/>}/>
            <Route path='/School-Activities' element={<Activities/>}/>
            <Route path="/Academic-Calender" element={<AcademicCalendar/>}/>
            <Route path='/School-Gallery' element={<Gallery/>}/>
            <Route path='/School-Gallery/:eventId' element={<EventPage/>}/>
            <Route path="/School-Admission" element={<Admissions/>}/>
            <Route path="/Contact-Us" element={<ContactUs/>}/>
            <Route path='/School-Rules' element={<RulesAndRegulations/>}/>

            
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
     
        <RouterProvider router={router} />
       
    </StrictMode>
);
