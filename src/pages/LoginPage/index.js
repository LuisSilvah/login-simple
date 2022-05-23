import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { flowService } from '../../helpers/flow';
import './login.scss'

export const LoginPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [{ username, password }] = useState({
    username: "test",
    password: "pass"
  });
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== formState.username || password !== formState.password) {
      setHasError(true);

      return;
    }
    localStorage.setItem("@isAutenticate", "logado");
    flowService.goTo(ROUTES.DASHBOARD);
  };

  return (
    <>
      {isAuth ? (
        <Redirect to={ROUTES.DASHBOARD} />
      ) : (
        <div className="login-container">
          <div className="modal-wrapper">
            <div className="nav"> <div className="view-actions">
              <button
                className="nav-btn login active"
              >Login
              </button>
            </div>
            </div>
            <form className='form-login'>
              <div className="email form">
                <div className="form-title">Name</div>
                <input
                  type="name" className="content" placeholder="Name" name='username'
                  onChange={handleChange}
                />
              </div>

              <div className="password form">
                <div className="form-title">Password</div>
                <input
                  type="password" className="content" placeholder="******" name='password'
                  onChange={handleChange}
                />
              </div>

              <button className="button" onClick={handleSubmit}>Submit</button>
            </form>
            {hasError && (
              <>
                <div className="forget">
                  <p>Login or pass invalid</p>
                </div>
              </>
            )}
          </div>
          <div className="overlay"></div>

        </div>

      )}
    </>
  )
}
