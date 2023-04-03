import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
import Protected from './components/Protected/Protected'
import HomePage from './components/HomePage/HomePage'

function App (): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route element={<Protected isLogged={true} />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
