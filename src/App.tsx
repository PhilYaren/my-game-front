/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogInForm from './components/LogInForm/LogInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInPage from './components/LogInPage/LogInPage';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getLoadedGames } from './redux/game/games.selector';
import { setGames } from './redux/game/games.action';
import { getUser } from './redux/user/user.selector';
import { authUser } from './redux/user/user.action';

function App(): JSX.Element {
  const games = useSelector(getGames);
  const user = useSelector(getUser);
  const loadedGames = useSelector(getLoadedGames);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/auth', {
          method: 'GET',
          credentials: 'include',
        });
        const userData = await response.json();

        if (response.ok) {
          dispatch(authUser(userData));
          const response = await fetch('http://localhost:3000/api/games', {
            method: 'GET',
            credentials: 'include',
          });
          const data = await response.json();
          console.log(data);
          dispatch(setGames(data));
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <LogInPage />
    </div>
  );
}

export default App;
