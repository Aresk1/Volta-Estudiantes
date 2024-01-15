import { useEffect, useState } from "react";
import {  URL } from "../config";
import { Link, useParams } from "react-router-dom";
import "./Detalle.css";

export const Detalle = () => {
  const { id } = useParams();
  const [estudiante, setEstudiante] = useState();

  useEffect(() => {
    fetch(`http://localhost:1337/api/estudiantes/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setEstudiante(data.data));
  }, []);

  return (
    <>
      <div className="containerr">
        <div>
          <Link to="/" className="btn btn-warning">
            Atras
          </Link>
        </div>
        <div className="card">
          <img
            src={`${URL}${estudiante?.attributes?.foto?.data?.attributes?.url}`}
            alt="No tiene foto"
          />
          <div className="name">{estudiante?.attributes?.nombre}</div>
          <p>
            <strong>
              {estudiante?.attributes?.curso} "
              {estudiante?.attributes?.paralelo}"{" "}
              {estudiante?.attributes?.especialidad}
            </strong>
          </p>
          <p>
            <strong>edad: {estudiante?.attributes?.edad} años </strong>
          </p>
        </div>
      </div>
    </>
  );
};
