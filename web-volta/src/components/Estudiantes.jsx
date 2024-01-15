import { useState } from "react";
import { URL } from "../config";
import "./Estudiantes.css";
import { Link } from "react-router-dom";

export function Estudiantes({ estudiantes }) {
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];
  if (!search) {
    results = estudiantes;
  } else {
    results = estudiantes.filter((dato) =>
      dato.attributes.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <main className="estudiantes">
      <br />
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Ingrese nombre del estudiante"
        className="form-control"
      />
      <br />
      <section className="container">
        {results &&
          results.map((est) => (
            <Link to={"/estudiante/" + est.id} key={est.id}>
              <div className="a-box">
                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img
                        src={`${URL}${est?.attributes?.foto?.data?.attributes?.url}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-container">
                  <h3>{est?.attributes?.nombre}</h3>
                  <div>{est?.attributes?.especialidad}</div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}

{
  /* <img src={`${URL}${est?.attributes?.foto?.data?.attributes?.url}`} /> */
}
