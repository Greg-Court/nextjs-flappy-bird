'use client';

import React, { FC, useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';

interface BirdProps {
  birdPosition: number;
  setBirdPosition: (value: number | ((prevState: number) => number)) => void;
  gameStarted: boolean;
}

const Bird: FC<BirdProps> = ({
  birdPosition,
  setBirdPosition,

  gameStarted,
}) => {
  const { GAME_HEIGHT, GRAVITY, BIRD_SIZE, BIRD_LEFT } =
    useContext(GameContext);

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (gameStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameStarted]);

  return (
    <div
      className='bg-red-500 rounded-full absolute'
      style={{
        height: `${BIRD_SIZE}px`,
        width: `${BIRD_SIZE}px`,
        top: `${birdPosition}px`,
        marginLeft: `${BIRD_LEFT}px`,
      }}
    ></div>
  );
};

export default Bird;
