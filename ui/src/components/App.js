import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./Header";
import Chatbot from "./chatbot/Chatbot";
import './App.css'
import UIView from "./chatbot/UI.view";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Landing/>} />
                    </Routes>

                </div>
            </BrowserRouter>

        </div>
    )
}

export default App;