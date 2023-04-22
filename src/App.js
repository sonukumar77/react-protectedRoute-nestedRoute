import Home from "./components/Home";
import Nav from "./components/Nav";
import "./styles.css";

import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import { myContext } from "./components/context";
import Tech from "./components/Tech";
import Html from "./components/Html";
import Css from "./components/Css";
import Js from "./components/Js";

export default function App() {
  const { isLoggedIn } = useContext(myContext);

  return (
    <div className="App">
      {isLoggedIn ? <Nav /> : <Login />}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tech"
          element={
            <ProtectedRoute>
              <Tech />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Navigate to="html" />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="js" element={<Js />} />
        </Route>
      </Routes>
    </div>
  );
}
