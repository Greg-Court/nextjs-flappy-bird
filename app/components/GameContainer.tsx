'use client';

import { FC, useContext, useEffect, useState } from 'react';
import Bird from './Bird';
import ObstacleGenerator from './ObstacleGenerator';
import { GameContext } from '../contexts/GameContext';

interface GameContainerProps {}

const GameContainer: FC<GameContainerProps> = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);

  const { GAME_WIDTH, GAME_HEIGHT, JUMP_HEIGHT } = useContext(GameContext);

  const handleKeyDown = (e: KeyboardEvent) => {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;

    if (!gameStarted) {
      setGameStarted(true);
    } else if (newBirdPosition < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [birdPosition, gameStarted]);

  return (
    <div className='flex w-full justify-center'>
      <div
        className='bg-green-800'
        style={{
          height: `${GAME_HEIGHT}px`,
          width: `${GAME_WIDTH}px`,
        }}
      >
        <ObstacleGenerator gameStarted={gameStarted} />
        <Bird
          birdPosition={birdPosition}
          setBirdPosition={setBirdPosition}
          gameStarted={gameStarted}
        />
      </div>
    </div>
  );
};

export default GameContainer;
