import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
    this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
  }

  create() {
    const { width, height } = this.scale;
    
    // Add and scale background
    const background = this.add.image(width / 2, height / 2, 'sky');
    const scaleX = width / background.width;
    const scaleY = height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale).setScrollFactor(0);

    // Add game objects
    const logo = this.physics.add.image(width / 2, height * 0.2, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    // Add back to menu button
    this.add.text(20, 20, 'Menu', {
      fontSize: '24px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 10, y: 5 }
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('MenuScene');
      });
  }
}