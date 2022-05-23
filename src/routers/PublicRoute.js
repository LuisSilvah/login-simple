import React from "react";
import { Route } from "react-router-dom";

/*  Helpers */
import { deepMerge } from "../helpers";

/*  Function */
import renderMergedProps from "./renderMergedProps";

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
         return renderMergedProps(component, deepMerge(routeProps, rest));
      }}
    />
  );
};

export default PublicRoute;
