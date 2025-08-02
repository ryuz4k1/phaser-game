import Phaser from 'phaser';

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SettingsScene' });
  }

  preload() {
    this.load.image('background', 'https://labs.phaser.io/assets/skies/space3.png');
  }

  create() {
    const { width, height } = this.scale;
    
    // Add background
    const background = this.add.image(width / 2, height / 2, 'background');
    const scaleX = width / background.width;
    const scaleY = height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale).setScrollFactor(0);

    // Settings title
    this.add.text(width / 2, height * 0.2, 'SETTINGS', {
      fontSize: '48px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Add some example settings (you can expand these later)
    const settingsConfig = {
      fontSize: '24px',
      color: '#ffffff',
      fontFamily: 'Arial'
    };

    // Example settings options
    this.add.text(width / 2, height * 0.45, 'Sound: ON', settingsConfig)
      .setOrigin(0.5)
      .setInteractive();

    this.add.text(width / 2, height * 0.55, 'Music: ON', settingsConfig)
      .setOrigin(0.5)
      .setInteractive();

    // Back button
    const backButton = this.add.text(width / 2, height * 0.75, 'Back to Menu', {
      fontSize: '32px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 20, y: 10 }
    })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerover', () => backButton.setStyle({ color: '#ff0' }))
      .on('pointerout', () => backButton.setStyle({ color: '#fff' }))
      .on('pointerdown', () => {
        this.scene.start('MenuScene');
      });
  }
}