import "./App.scss";
import { Router, Routes, Route, Link , useNavigate, BrowserRouter} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Homepage from "./pages/Homepage/Homepage";
import AppBarElement from "./components/AppBarElement";
import React from "react";
 


function App() {


  return (
    <div className="App">
    
        <AppBarElement/>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      

    </div>
  );
}

export default App;
