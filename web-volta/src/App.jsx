import { useState } from "react";
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";

const auth = getAuth(appFirebase);

import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detalle } from "./pages/Detalle";

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/estudiante/:id" element={<Detalle />} />
          <Route
            path="/"
            element={
              usuario ? <Home correoUsuario={usuario.email} /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
