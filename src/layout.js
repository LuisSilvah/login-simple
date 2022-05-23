import React, { useEffect, useState } from "react";
import NavBar from "./components/Nav";

const LayoutAdmin = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      {isAuth && <NavBar titlePage="dashboard" auth={isAuth} />}
      <div>{props.children}</div>
    </>
  );
};

export default LayoutAdmin

