import Phaser from 'phaser';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import SettingsScene from './scenes/SettingsScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-game', // div id
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false
    }
  },
  scene: [MenuScene, GameScene, SettingsScene]
};

export default config;
