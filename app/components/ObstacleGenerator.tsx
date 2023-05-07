import { FC, useEffect, useState } from 'react';
import Obstacle from './Obstacle';

interface ObstacleGeneratorProps {
  gameStarted: boolean;
}

const ObstacleGenerator: FC<ObstacleGeneratorProps> = ({ gameStarted }) => {
  const [obstacles, setObstacles] = useState<number[]>([]);

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setObstacles((prevObstacles) => [...prevObstacles, Date.now()]);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStarted, obstacles]);

  return (
    <div>
      {obstacles.map((key) => (
        <Obstacle key={key} gameStarted={gameStarted} />
      ))}
    </div>
  );
};

export default ObstacleGenerator;
