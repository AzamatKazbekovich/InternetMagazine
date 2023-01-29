import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./Styles/App.css";
import { AuthContext } from "./Context/Context";
import Products from "./Pages/Products";
import axios from "axios";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return isAuth ? (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Products />} path={"/products"} />
          <Route element={<Products />} path="*" />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  ) : (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path={"/login"} />
            <Route element={<Login />} path="*" />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
