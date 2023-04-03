/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg';
import NavBar from './components/NavBar/NavBar';
import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInPage from './components/LogInPage/LogInPage';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getLoadedGames } from './redux/game/games.selector';
import { setGames } from './redux/game/games.action';
import Protected from './components/Protected/Protected'
import HomePage from './components/HomePage/HomePage'
import './App.css'

function App (): JSX.Element {
  const games = useSelector(getGames);
  const loadedGames = useSelector(getLoadedGames);
  // import { useDispatch, useSelector } from 'react-redux';

  useEffect(() => {
    async function fetchData () {
      const response = await fetch('http://localhost:3000/api/games');
      const data = await response.json();
      console.log(data);
      useDispatch(setGames(data));
    }
    fetchData();
    return () => {
      console.log('unmounting');
    };
  }, []);
  console.log(games);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<LogInPage />} />
        <Route element={<Protected isLogged={true} />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
