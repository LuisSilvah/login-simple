import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import LayoutAdmin from "./layout";
import { ROUTES } from "./constants";

/* Import Custom Routes */
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

/* Import page*/
import { LoginPage, DashboardPage, HomePage } from "./pages";

const Router = () => {
  const [isAutenticating, setAutnticating] = useState(true);
  const [childProps, setChildProps] = useState({ isAutenticated: false });

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth === "logado") {
      setChildProps({ isAutenticated: true });
    }
    setAutnticating(false);
  }, []);

  return (
    <>
      {!isAutenticating && (
        <div className="app">
          <BrowserRouter>

            <Switch>
              <Route path="/" component={HomePage} exact />


              <LayoutAdmin>
                <PublicRoute
                  {...childProps}
                  path={ROUTES.LOGIN}
                  component={LoginPage}
                  exact
                />

                <PrivateRoute
                  {...childProps}
                  path={ROUTES.DASHBOARD}
                  component={DashboardPage}
                  exact
                />

              </LayoutAdmin>

            </Switch>
          </BrowserRouter>
        </div>
      )
      }
    </>
  );
};

export default Router;
