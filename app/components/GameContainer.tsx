'use client';

import { FC, ReactNode, useEffect, useState } from 'react';

const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;


interface GameContainerProps {
  children: ReactNode;
}

const GameContainer: FC<GameContainerProps> = ({ children }) => {

  const [birdPosition, setBirdPosition] = useState(250);

  return (
    <div
      className='bg-green-800'
      style={{
        height: `${GAME_HEIGHT}px`,
        width: `${GAME_WIDTH}px`,
      }}
    >
      {children}
    </div>
  );
};

export default GameContainer;
