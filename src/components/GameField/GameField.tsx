/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React from 'react';
import CategoryRow from '../CategoryRow/CategoryRow';
import { useSelector } from 'react-redux';
import { getGames } from '../../redux/game/games.selector';
import { useNavigate, useParams } from 'react-router-dom';
import './table.css'

export default function GameField({ setScore }): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const games = useSelector(getGames);
  const game = games.find((game: any) => game.id === Number(id));
  const loading = useSelector((state: any) => state.gamesReducer.loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!game) {
    navigate('/home', { replace: true });
  }
  const categoriesArr = game?.categories;
  return (
    <div id="divTableBorder">
      <table className="table table-bordered border-primary" id="tableSi">
        <tbody>
        {categoriesArr &&
          categoriesArr.map((category: any) => (
            <CategoryRow
              key={category.id}
              name={category.name}
              questions={category.questions}
              setScore={setScore}
            />
          ))}
        </tbody>
      </table>
    </div>

  );
}
