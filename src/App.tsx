/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInPage from './components/LogInPage/LogInPage';
import { useSelector } from 'react-redux';
import { getGames } from './redux/game/games.selector';

function App(): JSX.Element {
  const user = useSelector(getGames);
  console.log(user);
  return (
    <div className="App">
      <NavBar />
      <LogInPage />
    </div>
  );
}

export default App;
