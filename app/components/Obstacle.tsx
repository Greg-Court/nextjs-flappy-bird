import { FC, useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContext';

const UPPER_OBSTACLE_TOP: number = 0;

interface ObstacleProps {
  gameStarted: boolean;
  key: number;
}

const Obstacle: FC<ObstacleProps> = ({ gameStarted, key }) => {
  const {
    GAME_WIDTH,
    GAME_HEIGHT,
    OBSTACLE_WIDTH,
    OBSTACLE_GAP,
    MIN_UPPER_OBSTACLE_HEIGHT,
    MAX_UPPER_OBSTACLE_HEIGHT,
  } = useContext(GameContext);

  const [upperObstacleHeight, setUpperObstacleHeight] = useState(
    Math.floor(
      Math.random() *
        (MAX_UPPER_OBSTACLE_HEIGHT - MIN_UPPER_OBSTACLE_HEIGHT + 1) +
        MIN_UPPER_OBSTACLE_HEIGHT
    )
  );
  const LOWER_OBSTACLE_HEIGHT =
    GAME_HEIGHT - OBSTACLE_GAP - upperObstacleHeight;
  const LOWER_OBSTACLE_TOP =
    GAME_HEIGHT - upperObstacleHeight - LOWER_OBSTACLE_HEIGHT;

  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (gameStarted) {
      timeId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 1);
      }, 12);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [gameStarted]);

  return (
    <div key={key}>
      <div
        className='relative bg-blue-900'
        style={{
          height: `${upperObstacleHeight}px`,
          width: `${OBSTACLE_WIDTH}px`,
          top: `${UPPER_OBSTACLE_TOP}px`,
          left: `${obstacleLeft}px`,
        }}
      />
      <div
        className='relative bg-orange-900'
        style={{
          height: `${LOWER_OBSTACLE_HEIGHT}px`,
          width: `${OBSTACLE_WIDTH}px`,
          top: `${LOWER_OBSTACLE_TOP}px`,
          left: `${obstacleLeft}px`,
        }}
      />
    </div>
  );
};

export default Obstacle;
