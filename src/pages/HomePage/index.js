import React, { useEffect, useState } from "react";
import NavBar from "../../components/Nav";


import './home.scss'

export const HomePage = () => {
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {isAuth ? <NavBar titlePage="home" auth={isAuth} /> : <NavBar titlePage="home" auth={isAuth} />}

      <section className="main-container">
        

        {!isAuth ? "" : <h1 className="title heading-1">Admin logado</h1>}

        <h1 className="title heading-1">HomePage</h1>
      </section>

    </>
  );
};
