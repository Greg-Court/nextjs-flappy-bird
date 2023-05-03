import Bird from './components/Bird';
import GameContainer from './components/GameContainer';

export default function Home() {
  return (
    <div className='flex w-full justify-center'>
      <GameContainer>
        <Bird />
      </GameContainer>
    </div>
  );
}
