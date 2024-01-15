import { useState, useEffect } from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { Estudiantes } from "./Estudiantes.jsx";
import { API } from "../config.js";
import {Header} from './Header.jsx'
import { useFilters } from "../hooks/useFilters.jsx";


const auth = getAuth(appFirebase);



const Home = () => {
  const [estudiantes, setEstudiantes] = useState();
  const {filterEstudiantes} = useFilters()


  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setEstudiantes(data.data));
  }, []);
  
  let filteredEstudiantes = [];
  if (estudiantes) {
    filteredEstudiantes = filterEstudiantes(estudiantes);
  }



  return (
    <div>
      <Header />
      <button className="btn btn-primary" onClick={() => signOut(auth)}>
        Cerrar Sesion
      </button>
      <Estudiantes estudiantes={filteredEstudiantes} />
    </div>
  );
};

export default Home;
