import { ROUTES } from "../constants";

const goTo = (path, params) => {
  window.location.replace(
    decodeURIComponent((path || ROUTES.HOME) + (params ? params : "")) //usaremos um componente codificado de um Identificador Uniforme de Recursos
  );
};

export const flowService = {
  goTo
};
