import {useContext} from 'react'
import { FiltersContext } from "../context/filters.jsx";

export function useFilters(){

    const {filters, setFilters} = useContext(FiltersContext)
  
    const filterEstudiantes = (estudiantes) => {
      return estudiantes.filter((estudiante) => {
        return (
          filters.especialidad === "all" ||
          estudiante?.attributes?.especialidad === filters.especialidad
        );
      });
    };
  
  
    return{filters, filterEstudiantes, setFilters }
  }