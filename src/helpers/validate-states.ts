import { STATES } from "../interfaces";

export const validateStates = (state: STATES) => {

  switch (state) {
    case STATES.READY:
      return "LISTO";
    case STATES.ONGOING:
      return "EN EJECUCIÓN";
    case STATES.EDITING:
      return "EN EDICIÓN";
    case STATES.EXECUTED:
      return "EJECUTADO";
    case STATES.CREATED:
      return "CREADO";
  }
}