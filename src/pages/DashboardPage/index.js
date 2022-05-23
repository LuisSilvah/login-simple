import React from "react";
import { Link } from "react-router-dom";
import './dashboard.scss'

export const DashboardPage = () => {

  return (
    <>
      <section className="main-container">
        <div className="page">
          <h1>DashboardPage</h1>
          <Link to="/">HomePage</Link>
        </div>
      </section>
    </>
  );
};