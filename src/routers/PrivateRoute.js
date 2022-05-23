import React from "react";

import { Redirect } from "react-router-dom";

/*  Constants */
import { ROUTES } from "../constants";

/*  Routes */
import PublicRoute from "./PublicRoute";

const PrivateRoute = (props) => {
  const { isAutenticated } = props; 

  return (
    <>
      {isAutenticated && <PublicRoute {...props} />}

      {!isAutenticated && <Redirect to={ROUTES.LOGIN} />}
    </>
  );
};

export default PrivateRoute;


