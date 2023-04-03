/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInPage from "./components/LogInPage/LogInPage";
import GamePage from "./components/GamePage/GamePage";

function App (): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      {/* <LogInPage /> */}
      <GamePage />
    </div>
  )
}

export default App
