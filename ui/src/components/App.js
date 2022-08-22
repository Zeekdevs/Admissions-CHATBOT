import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./Header";
import Contact from "./contact/Contact";
import Chatbot from "./chatbot/Chatbot";
import './App.css'
import UIView from "./chatbot/UI.view";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Landing/>} />
                        <Route exact path="/contact" element={<Contact/>} />
                    </Routes>
                    <Chatbot/>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default App;