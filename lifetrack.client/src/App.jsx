//import { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Patient from "./pages/Patient";
import Patient_history from "./pages/Patient_history";
import Strategy from "./pages/Strategy";
import New_strategy from "./pages/New_strategy";
import Analysis from "./pages/Analysis";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home/:id" element={<Home />}></Route>
                <Route path="/patients/:id" element={<Patients />}></Route>
                <Route path="/patient/:id" element={<Patient />}></Route>
                <Route path="/patient_history/:id" element={<Patient_history />}></Route>
                <Route path="/strategy" element={<Strategy />}></Route>
                <Route path="/new_strategy" element={<New_strategy />}></Route>
                <Route path="/analysis" element={<Analysis />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
