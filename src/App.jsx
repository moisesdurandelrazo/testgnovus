/** @format */

import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <Nav />
      <head className="App-header">
        <title>Formulario Login</title>
      </head>
      <div className="all">
        <section>
          <h3 className="title">LOGIN</h3>
          <form className="form-login">
            <input
              className="input-form"
              type="text"
              placeholder="email or username"
              name="login"
              defaulValue=""
              required
            />
            <input
              className="input-form"
              type="text"
              placeholder="password"
              name="contraseña"
              defaulValue=""
              required
            />

            <p className="forgot">
              <Link to="/" className="text-forgot">
                forgot?
              </Link>
            </p>
            <input type="submit" className="submit" value="sing in" />
          </form>
        </section>
        <p className="policy">
          By singing to Discoins, you agree to our <strong>Terms</strong> and{" "}
          <strong>Privacy Policy</strong>
        </p>

        <div className="btn-boot">
          <p className="text-boot">or</p>
          <ThemeSwitcher />
        </div>
      </div>
      <footer className="footer-copy">
        <span>©2021 DISCOINS Inc. All rights reserved. About</span>
        <span className="copy-dos">
          • For Advertisers • For Advertising Agencies • Privacy Policy
        </span>
      </footer>
    </div>
  );
}

export default App;
