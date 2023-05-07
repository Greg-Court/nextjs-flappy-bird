import Bird from './components/Bird';
import GameContainer from './components/GameContainer';
import { GameProvider } from './contexts/GameContext';

export default function Game() {
  return (
    <GameProvider>
      <GameContainer />;
    </GameProvider>
  );
}
