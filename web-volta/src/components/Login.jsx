import { useState } from "react";
import './Login.css'

import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const funcAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("Asegurese que la contraseña tenga más de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={funcAutenticacion}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Ingrese su Email"
            className="cajatexto"
            id="email"
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="cajatexto"
            id="password"
            required
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
        {registrando ? "Registrate" : "Inicia Sesion"}
        </button>
        <div className="register-link">
          <p>
            {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
            <br />
            <a
              className="btnswitch"
              onClick={() => setRegistrando(!registrando)}
            >
              {registrando ? "Inicia sesion" : "Registrate"}
            </a>
          </p>
        </div>
      </form>
    </div>
    
  );
};

export default Login;

