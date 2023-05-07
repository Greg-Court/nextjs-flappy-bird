'use client'

import { createContext, ReactNode } from 'react';

export const GameContext = createContext({
  GAME_WIDTH: 0,
  GAME_HEIGHT: 0,
  GRAVITY: 0,
  BIRD_SIZE: 0,
  BIRD_LEFT: 0,
  JUMP_HEIGHT: 0,
  OBSTACLE_WIDTH: 0,
  OBSTACLE_GAP: 0,
  MIN_UPPER_OBSTACLE_HEIGHT: 0,
  MAX_UPPER_OBSTACLE_HEIGHT: 0,
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const constants = {
    GAME_WIDTH: 500,
    GAME_HEIGHT: 500,
    GRAVITY: 6,
    BIRD_SIZE: 20,
    BIRD_LEFT: 100,
    JUMP_HEIGHT: 100,
    OBSTACLE_WIDTH: 40,
    OBSTACLE_GAP: 100,
    MIN_UPPER_OBSTACLE_HEIGHT: 100,
    MAX_UPPER_OBSTACLE_HEIGHT: 400,
  };

  return (
    <GameContext.Provider value={constants}>{children}</GameContext.Provider>
  );
};