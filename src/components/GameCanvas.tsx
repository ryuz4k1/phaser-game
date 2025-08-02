import { useEffect } from 'react';
import Phaser from 'phaser';
import phaserConfig from '../game/Game';

const GameCanvas: React.FC = () => {
  useEffect(() => {
    const game = new Phaser.Game(phaserConfig);

    return () => {
      game.destroy(true); // cleanup
    };
  }, []);

  return <div id="phaser-game" />;
};

export default GameCanvas;