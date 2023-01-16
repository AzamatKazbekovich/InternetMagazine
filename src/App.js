import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path={"/login"} />
          <Route element={<Login />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
