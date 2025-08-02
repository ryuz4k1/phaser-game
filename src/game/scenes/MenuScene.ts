import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  private menuItems: Phaser.GameObjects.Text[] = [];

  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image('background', 'https://labs.phaser.io/assets/skies/space3.png');
  }

  create() {
    const { width, height } = this.scale;
    
    // Add and scale background
    const background = this.add.image(width / 2, height / 2, 'background');
    const scaleX = width / background.width;
    const scaleY = height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale).setScrollFactor(0);

    // Menu title
    this.add.text(width / 2, height * 0.25, 'GAME MENU', {
      fontSize: '48px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Menu options configuration
    const menuConfig = {
      fontSize: '32px',
      color: '#ffffff',
      fontFamily: 'Arial',
      align: 'center'
    };

    // Menu items
    const startGame = this.add.text(width / 2, height * 0.45, 'Start Game', menuConfig)
      .setOrigin(0.5)
      .setInteractive();

    const settings = this.add.text(width / 2, height * 0.55, 'Settings', menuConfig)
      .setOrigin(0.5)
      .setInteractive();

    const exit = this.add.text(width / 2, height * 0.65, 'Exit', menuConfig)
      .setOrigin(0.5)
      .setInteractive();

    this.menuItems = [startGame, settings, exit];

    // Add hover effect
    this.menuItems.forEach(item => {
      item.on('pointerover', () => {
        item.setStyle({ color: '#ff0' });
      });

      item.on('pointerout', () => {
        item.setStyle({ color: '#fff' });
      });
    });

    // Add click handlers
    startGame.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    settings.on('pointerdown', () => {
      this.scene.start('SettingsScene');
    });

    exit.on('pointerdown', () => {
      // In a web context, we can close the window
      window.close();
    });
  }
}