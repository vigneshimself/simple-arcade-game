const gameState = {};



function preload() {
  this.load.image('codey', '/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(40, 200, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
	// Update based on keypress here!
   if (gameState.cursors.right.isDown) {
	 gameState.codey.x += 5;
   }
   if (gameState.cursors.left.isDown) {
	 gameState.codey.x -= 5;
   }
  }

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
