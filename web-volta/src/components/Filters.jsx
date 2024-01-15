import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const { setFilters} = useFilters();
  

  const especialidadFilterId = useId();

  const handleChangeEspecialidad = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      especialidad: event.target.value,
    }));
  };


  return (
    <section className="filters">
      <div>
        <h1> Estudiantes Volta </h1>
      </div>
      <div>
        <label htmlFor={especialidadFilterId}>Especialidades</label>
        <select id={especialidadFilterId} onChange={handleChangeEspecialidad}>
          <option value="all">Todas</option>
          <option value="Informatica">Informática</option>
          <option value="Mecanica">Mecánica</option>
        </select>
      </div>
    </section>
  );
}
